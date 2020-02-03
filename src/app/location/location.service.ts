import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  name: string;
  thingsURL: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Locations?$count=true";
  locations: Location[];

  constructor(private http: HttpClient) { }

  getLocationsList() {
    this.locations = this.http.get(this.listURL)
    console.log(this.locations)
    return this.locations
  }
}
