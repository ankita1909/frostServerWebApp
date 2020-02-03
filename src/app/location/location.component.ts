import { Component, OnInit } from '@angular/core';
import { LocationService, Location } from './location.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Locations {
  locations: Location[];
  next: string;
  count: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
  // styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  title = 'Locations';
  locations;
  displayedColumns: string[] = ['name', 'description', 'things',];
  dataSource = ELEMENT_DATA;

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
    console.log(this.locations)
  }

  ngOnInit() {
    this.getLocations()
  }
}
