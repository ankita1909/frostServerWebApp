import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThingService {

  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Things?$count=true"
  detailURL = "/Things"

  constructor(private http: HttpClient) { }

  getThingsList() {
    things = this.http.get(this.listURL)
  }

  getThingsDetail(id: int) {
    return this.http.get(this.detailURL + "(" + id + ")")
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Locations?$count=true"
  locations: Location[]

  constructor(private http: HttpClient) { }

  getLocationsList() {
    this.locations = this.http.get(this.listURL)
    console.log(this.locations)
    return this.locations
  }
}
