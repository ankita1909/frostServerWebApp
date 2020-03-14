import { Component, OnInit } from '@angular/core';
import { LocationService } from './location/location.service';
import { HistoricalLocationService } from './historical_locations/service';
import { ThingService } from './thing/thing.service';
import { SensorService } from './sensor/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./toolbar.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private historicalLocationService: HistoricalLocationService,
    private thingService: ThingService,
    private sensorService: SensorService,
  ) { }

  locations;
  things;
  sensors;
  historicalLocations;

  getLocations() {
    this.locations = this.locationService.getLocationsList('')
      .subscribe(data => this.locations = data['@iot.count']);
    this.things = this.thingService.getThingsList('')
      .subscribe(data => this.things = data['@iot.count']);
    this.sensors = this.sensorService.getSensorsList()
      .subscribe(data => this.sensors = data['@iot.count']);
    this.historicalLocations = this.historicalLocationService.getLocationsList()
      .subscribe(data => this.historicalLocations = data['@iot.count']);
  }

  ngOnInit() {
    this.getLocations()
  }
}
