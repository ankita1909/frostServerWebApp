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
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Locations";
  postURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Locations";
  locations;
  location;

  constructor(private http: HttpClient) { }

  getLocationsList(url) {
    this.locations = this.http.get(url || this.listURL);
    return this.locations;
  }

  getLocationDetail(id) {
    this.location = this.http.get(this.detailURL + "(" + id + ")");
    return this.location;
  }

  create(f) {
    return this.http.post(this.postURL, f)
  }

  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
