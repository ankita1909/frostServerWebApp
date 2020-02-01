import { Component, OnInit, Input } from '@angular/core';
import { DatastreamService } from './service';
import { ObservedPropertyService } from '../observed-property/service';
import { SensorService } from '../sensor/sensor.service';
import { ThingService } from '../thing/thing.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ObservationComponent } from '../observation/component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

/* Display the list of datastreams available.
 * An input property `listURL` is defined on this component, that allows
 * a user of this component to specify the URL from which the list
 * of datastreams will be fetched to populate the table.
 *
 * If the `listURL` is empty, the component assumes that all datastreams
 * are to be listed.
 */
@Component({
  selector: 'app-datastream',
  templateUrl: './component-list.html'
})
export class DatastreamComponent implements OnInit {
  title = 'Datastreams';
  datastreams;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['name', 'description', 'observationType', 'unitOfMeasurement', 'details', 'action',];

  constructor(
    private datastreamService: DatastreamService,
  ) { }

  /* Get list of datastreams */
  getDatastreams() {
    this.datastreams = this.datastreamService.getList(this.listURL)
      .subscribe(data => this.datastreams = {
        datastreams: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  /* Delete a datastream specified by datastream ID */
  remove(id) {
    this.datastreamService.remove(id).subscribe(
      data => {
        console.log("Deleted")
        window.location.href="/#/datastreams"
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getDatastreams()
  }
}

/* Display a single datastream in detail.
 * In form of tabs:
 *  - thing
 *  - sensor
 *  - observed property
 *  - properties of the datastream
 *  - editing the datastream
 */
@Component({
  selector: 'app-datastream-detail',
  templateUrl: './component-detail.html'
})
export class DatastreamDetailComponent implements OnInit {
  title = 'Datastream';
  datastream;
  sensor;
  thing;
  observedProperty;

  constructor(
    private datastreamService: DatastreamService,
    private thingService: ThingService,
    private sensorService: SensorService,
    private observedPropertyService: ObservedPropertyService,
    private route: ActivatedRoute,
  ) { }

  /* Get a single datastream and associated sensor, thing and observed property */
  getDatastream() {
    this.datastream = this.route.paramMap.pipe(
      switchMap(params => this.datastreamService.getDetail(params.get('id'))))
        .subscribe(
          (data) => {
            this.datastream = {
              id: data['@iot.id'],
              name: data['name'],
              description: data['description'],
              observationType: data['observationType'],
              unitOfMeasurement: data['unitOfMeasurement'],
              sensorURL: data['Sensor@iot.navigationLink'],
              thingURL: data['Thing@iot.navigationLink'],
              observedPropertyURL: data['ObservedProperty@iot.navigationLink'],
              observationsURL: data['Observations@iot.navigationLink'],
            }
            this.thing = this.thingService.getThingDetail(undefined, this.datastream.thingURL).subscribe(
              data => this.thing = data
            )
            this.sensor = this.sensorService.getSensorDetail(undefined, this.datastream.sensorURL).subscribe(
              data => this.sensor = data
            )
            this.observedProperty = this.observedPropertyService.getDetail(undefined, this.datastream.observedPropertyURL).subscribe(
              data => this.observedProperty = data
            )
        });
  }

  ngOnInit() {
    this.getDatastream()
  }
}
