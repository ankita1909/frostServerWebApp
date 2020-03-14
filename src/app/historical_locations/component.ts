import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoricalLocationService } from './service';
import { ThingService } from '../thing/thing.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LocationComponent } from '../location/location.component';
import { switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-historical-location',
  templateUrl: './component-list.html'
  // styleUrls: ['./location.component.css']
})
export class HistoricalLocationComponent implements OnInit {
  title = 'Historical Locations';
  locations;
  displayedColumns: string[] = ['id', 'time', 'details',];

  constructor(
    private historicalLocationService: HistoricalLocationService
  ) { }

  getHistoricalLocations() {
    this.locations = this.historicalLocationService.getLocationsList()
      .subscribe(data => this.locations = {
        locations: data['value'],
        count: data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getHistoricalLocations()
  }
}

@Component({
  selector: 'app-historical-location-detail',
  templateUrl: './component-detail.html'
  // styleUrls: ['./location.component.css']
})
export class HistoricalLocationDetailComponent implements OnInit {
  title = 'Historical Location';
  location;
  thing;

  constructor(
    private historicalLocationService: HistoricalLocationService,
    private thingService: ThingService,
    private route: ActivatedRoute,
  ) { }

  getLocation() {
    this.location = this.route.paramMap.pipe(
      switchMap(params => this.historicalLocationService.getLocationDetail(params.get('id'))))
          .subscribe(
            (data) => {
              this.location = {
                id: data['@iot.id'],
                time: data['time'],
                thingURL: data['Thing@iot.navigationLink'],
                locationsURL: data['Locations@iot.navigationLink'],
              }
              this.thing = this.getThing(data['Thing@iot.navigationLink']).subscribe(
                data => this.thing = data
              )
            },
            err => console.log(err),
          );
  }

  getThing(url) {
    return this.thingService.getThingDetail(undefined, url)
      .subscribe(data => this.thing = {
          id: data['@iot.id'],
          name: data['name'],
          description: data['description'],
        },
        (err) => console.log(this.thing, err),
        () => console.log(this.thing),
      );
  }

  ngOnInit() {
    this.getLocation()
  }
}
