import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  name: string;
  thingsURL: string;
  description: string;
}

/* Service for CRUD ops on datastreams */
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

  /* Get list of objects in the resource.
   * @param url Optional URL from which to get list of objects
   */
  getLocationsList(url) {
    this.locations = this.http.get(url || this.listURL);
    return this.locations;
  }

  /* Get single object in the resource.
   * @param id Optional if url is passed. The ID of the datastream to be fetched.
   */
  getLocationDetail(id) {
    this.location = this.http.get(this.detailURL + "(" + id + ")");
    return this.location;
  }
  /* Create a new location from the given object
   * @param f The object that, when POSTed to server, returns
   *          a new location object.
   */
  create(f) {
    return this.http.post(this.postURL, f)
  }

  /* Update a given location.
   * @param f The object that represents the updated values.
   *          Everything except the `id` can be updated.
   */
  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
