import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Service for CRUD ops on sensors */
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Sensors?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Sensors";
  postURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Sensors";
  sensors;
  sensor;

  constructor(private http: HttpClient) { }

  /* Get list of objects in the resource.
   * @param url Optional URL from which to get list of objects
   */
  getSensorsList() {
    this.sensors = this.http.get(this.listURL);
    return this.sensors;
  }

  /* Get single object in the resource.
   * @param url Optional URL from which to get object
   * @param id Optional if url is passed. The ID of the sensor to be fetched.
   */
  getSensorDetail(id?, url?) {
    this.sensor = this.http.get(url || this.detailURL + "(" + id + ")");
    return this.sensor;
  }

  /* Create a new sensor from the given object
   * @param f The object that, when POSTed to server, returns
   *          a new sensor object.
   */
  create(f) {
    return this.http.post(this.postURL, f)
  }

  /* Update a given sensor.
   * @param f The object that represents the updated values.
   *          Everything except the `id` can be updated.
   */
  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
