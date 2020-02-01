import { Component, OnInit } from '@angular/core';
import { LocationService } from './location/location.service';
import { DatastreamService } from './datastream/service';
import { ObservationService } from './observation/service';
import { ObservedPropertyService } from './observed-property/service';
import { HistoricalLocationService } from './historical_locations/service';
import { ThingService } from './thing/thing.service';
import { SensorService } from './sensor/sensor.service';
import { FeatureOfInterestService } from './feature-of-interest/service';

/* Display the home dashboard.
 * This component queries all the resources available, and gets their count.
 * It then renders the dashboard, with all resources, the count, and their
 * corresponding link.
 */
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
    private datastreamService: DatastreamService,
    private observationService: ObservationService,
    private featureOfInterestService: FeatureOfInterestService,
    private observedPropertyService: ObservedPropertyService,
  ) { }

  locations;
  things;
  sensors;
  historicalLocations;
  datastreams;
  observations;
  featuresOfInterest;
  observedProperties;

  /* Get the list endpoint of all resources, along with count */
  getList() {
    this.locations = this.locationService.getLocationsList('')
      .subscribe(data => this.locations = data['@iot.count']);
    this.things = this.thingService.getThingsList('')
      .subscribe(data => this.things = data['@iot.count']);
    this.sensors = this.sensorService.getSensorsList()
      .subscribe(data => this.sensors = data['@iot.count']);
    this.historicalLocations = this.historicalLocationService.getLocationsList()
      .subscribe(data => this.historicalLocations = data['@iot.count']);
    this.datastreams = this.datastreamService.getList('')
      .subscribe(data => this.datastreams = data['@iot.count']);
    this.observations = this.observationService.getList('')
      .subscribe(data => this.observations = data['@iot.count']);
    this.featuresOfInterest = this.featureOfInterestService.getList('')
      .subscribe(data => this.featuresOfInterest = data['@iot.count']);
    this.observedProperties = this.observedPropertyService.getList('')
      .subscribe(data => this.observedProperties = data['@iot.count']);
  }

  ngOnInit() {
    this.getList()
  }
}
