import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThingService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Things?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Things";
  postURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Things";
  things;
  thing;

  constructor(private http: HttpClient) { }

  getThingsList(url) {
    this.things = this.http.get(url || this.listURL);
    return this.things;
  }

  getThingDetail(id?, url?) {
    this.thing = this.http.get(url || this.detailURL + "(" + id + ")");

    return this.thing;
  }

  create(f) {
    return this.http.post(this.postURL, f)
  }

  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
