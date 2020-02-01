import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Service for CRUD ops on things */
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

  /* Get list of objects in the resource.
   * @param url Optional URL from which to get list of objects
   */
  getThingsList(url) {
    this.things = this.http.get(url || this.listURL);
    return this.things;
  }

  /* Get single object in the resource.
   * @param url Optional URL from which to get object
   * @param id Optional if url is passed. The ID of the thing to be fetched.
   */
  getThingDetail(id?, url?) {
    this.thing = this.http.get(url || this.detailURL + "(" + id + ")");

    return this.thing;
  }

  /* Create a new thing from the given object
   * @param f The object that, when POSTed to server, returns
   *          a new thing object.
   */
  create(f) {
    return this.http.post(this.postURL, f)
  }

  /* Update a given thing.
   * @param f The object that represents the updated values.
   *          Everything except the `id` can be updated.
   */
  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
