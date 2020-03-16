import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from './sensor.service';
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
