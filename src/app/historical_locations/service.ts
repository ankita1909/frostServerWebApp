import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  name: string;
  thingsURL: string;
  description: string;
}

/* Service for CRUD ops on historical locations */
@Injectable({
  providedIn: 'root'
})
export class HistoricalLocationService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/HistoricalLocations?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/HistoricalLocations";
  locations;
  location;

  constructor(private http: HttpClient) { }

  /* Get list of objects in the resource.
   * @param url Optional URL from which to get list of objects
   */
  getLocationsList() {
    this.locations = this.http.get(this.listURL);
    return this.locations;
  }

  /* Get single object in the resource.
   * @param url Optional URL from which to get object
   * @param id Optional if url is passed. The ID of the datastream to be fetched.
   */
  getLocationDetail(id) {
    this.location = this.http.get(this.detailURL + "(" + id + ")");
    return this.location;
  }
}
