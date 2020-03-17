import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from './sensor.service';
import { ObservedPropertyService } from '../observed-property/service';
import { DatastreamService } from '../datastream/service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html'
  // styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  title = 'Sensors';
  sensors;
  displayedColumns: string[] = ['name', 'description', 'metadata', 'details',];

  constructor(
    private sensorService: SensorService
  ) { }

  getSensors() {
    this.sensors = this.sensorService.getSensorsList()
      .subscribe(data => this.sensors = {
        sensors: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getSensors()
  }
}

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html'
  // styleUrls: ['./sensor.component.css']
})
export class SensorDetailComponent implements OnInit {
  title = 'Sensor';
  sensor;

  constructor(
    private sensorService: SensorService,
    private route: ActivatedRoute,
  ) { }

  getSensor() {
    this.sensor = this.route.paramMap.pipe(
      switchMap(params => this.sensorService.getSensorDetail(params.get('id'))))
          .subscribe(data => this.sensor = {
              name: data['name'],
              description: data['description'],
              metadata: data['metadata'],
              encodingType: data['encodingType'],
        });
  }

  ngOnInit() {
    this.getSensor()
  }
}


@Component({
  selector: 'sensor-connect',
  templateUrl: './sensor-connect.component.html'
  // styleUrls: ['./sensor.component.css']
})
export class SensorConnectComponent implements OnInit {
  title = 'Sensors';
  @Input()
  thingID;
  sensors;
  unitsOfMeasurement = [
    {
      "name": "Temperature",
      "value": {
        "symbol": "degC",
        "name": "Degree Celsius",
        "definition": "http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius"
      }
    },
    {
      "name": "Enter manually",
      "value": {},
    },
  ];
  observationTypes = [
    {
      "name": "Category Observation",
      "value": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CategoryObservation",
    },
    {
      "name": "Count Observation",
      "value": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation",
    },
    {
      "name": "Measurement",
      "value": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement",
    },
    {
      "name": "Observation",
      "value": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Observation",
    },
    {
      "name": "Truth Observation",
      "value": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TruthObservation",
    },
  ];
  observedProperties;
  displayedColumns: string[] = ['name', 'description', 'metadata', 'action',];

  // form values
  sensorID;
  observedPropertyID;
  unitOfMeasurement;
  chooseAmongOptions = true;
  unitOfMeasurementStr;
  datastreamName;
  datastreamDescription;

  constructor(
    private sensorService: SensorService,
    private observedPropertyService: ObservedPropertyService,
    private datastreamService: DatastreamService,
  ) { }

  getSensors() {
    this.sensors = this.sensorService.getSensorsList()
      .subscribe(data => this.sensors = {
        sensors: data['value'],
        next: data['@iot.nextLink']
    });
  }

  getObservedProperties() {
    this.observedProperties = this.observedPropertyService.getList('')
      .subscribe(data => this.observedProperties = {
        observedProperties: data['value'],
        next: data['@iot.nextLink'],
      })
  }

  checkUnitValue(e) {
    console.log(e)
    if (Object.keys(e).length == 0) {
      this.chooseAmongOptions = false;
    }
    console.log(this.chooseAmongOptions)
  }

  onSubmit(f) {
    console.log(f.value)
    if (!this.chooseAmongOptions) {
      try {
        f.value.unitOfMeasurement = JSON.parse(f.value.unitOfMeasurementStr)
      }
      catch (e) {
        console.log("Invalid Unit Of measurement entered")
        return
      }
    }
    var payload = {
      "name": f.value.datastreamName,
      "description": f.value.datastreamDescription,
      "observationType": f.value.observationType,
      "unitOfMeasurement": f.value.unitOfMeasurement,
      "Thing": {"@iot.id": this.thingID},
      "ObservedProperty": {"@iot.id": f.value.observedPropertyID},
      "Sensor": {"@iot.id": f.value.sensorID},
    }
    console.log(payload)
    this.datastreamService.create(payload).subscribe(
        data => {
          alert("Created new datastream")
          window.location.href="/#/datastreams"
        },
        err => console.log(err),
      )
  }

  ngOnInit() {
    this.getSensors()
    this.getObservedProperties()
  }
}
