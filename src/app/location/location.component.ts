import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService, Location } from './location.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
  // styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  title = 'Locations';
  locations;
  displayedColumns: string[] = ['name', 'description', 'things',];

  constructor(
    private locationService: LocationService
  ) { }

  getLocations() {
    this.locations = this.locationService.getLocationsList()
      .subscribe(data => this.locations = {
        locations: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getLocations()
  }
}

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html'
  // styleUrls: ['./location.component.css']
})
export class LocationDetailComponent implements OnInit {
  title = 'Location';
  location;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute,
  ) { }

  getLocation() {
    this.location = this.route.paramMap.pipe(
      switchMap(params => this.locationService.getLocationDetail(params.get('id'))))
          .subscribe(data => this.location = {
              name: data['name'],
              description: data['description'],
              location: data['location'],
              thingsURL: data['Things@iot.navigationLink'],
        });
  }

  ngOnInit() {
    this.getLocation()
  }
}
