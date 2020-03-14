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
export class HistoricalLocationService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/HistoricalLocations?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/HistoricalLocations";
  locations;
  location;

  constructor(private http: HttpClient) { }

  getLocationsList() {
    this.locations = this.http.get(this.listURL);
    return this.locations;
  }

  getLocationDetail(id) {
    this.location = this.http.get(this.detailURL + "(" + id + ")");
    return this.location;
  }
}
