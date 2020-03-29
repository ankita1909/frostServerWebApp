import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService, Location } from './location.service';
import { LocationFormComponent } from './form';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { switchMap } from 'rxjs/operators';

/* Display the list of locations available.
 * An input property `listURL` is defined on this component, that allows
 * a user of this component to specify the URL from which the list
 * of datastreams will be fetched to populate the table.
 *
 * If the `listURL` is empty, the component assumes that all locations
 * are to be listed.
 * */
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
  // styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  title = 'Locations';
  locations;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['name', 'description', 'things',];

  constructor(
    private locationService: LocationService
  ) { }

  /* Get list of locations */
  getLocations() {
    this.locations = this.locationService.getLocationsList(this.listURL)
      .subscribe(data => this.locations = {
        locations: data['value'],
        count: data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getLocations()
  }
}

/* Display a single location in detail.
 * In form of tabs:
 *  - properties
 *  - editing the location
 */
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

  /* Get a single location and associated properties */
  getLocation() {
    this.location = this.route.paramMap.pipe(
      switchMap(params => this.locationService.getLocationDetail(params.get('id'))))
          .subscribe(data => this.location = {
              name: data['name'],
              description: data['description'],
              location: data['location'],
              thingsURL: data['Things@iot.navigationLink'],
              encodingType: data['encodingType'],
              id: data['@iot.id'],
        });
  }

  ngOnInit() {
    this.getLocation()
  }
}
