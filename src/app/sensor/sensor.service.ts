import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Sensors?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Sensors";
  sensors;
  sensor;

  constructor(private http: HttpClient) { }

  getSensorsList() {
    this.sensors = this.http.get(this.listURL);
    return this.sensors;
  }

  getSensorDetail(id) {
    this.sensor = this.http.get(this.detailURL + "(" + id + ")");
    return this.sensor;
  }
}
