import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Service for CRUD ops on datastreams */
@Injectable({
  providedIn: 'root'
})
export class DatastreamService {
  listURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Datastreams?$count=true";
  detailURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Datastreams";
  postURL = "http://iot.gis.bgu.tum.de:8080/FROST-Server/v1.0/Datastreams";
  list;
  detail;

  constructor(private http: HttpClient) { }

  /* Get list of objects in the resource.
   * @param url Optional URL from which to get list of objects
   */
  getList(url) {
    this.list = this.http.get(url || this.listURL);
    return this.list;
  }

  /* Get single object in the resource.
   * @param url Optional URL from which to get object
   * @param id Optional if url is passed. The ID of the datastream to be fetched.
   */
  getDetail(id?, url?) {
    this.detail = this.http.get(url || this.detailURL + "(" + id + ")");
    return this.detail;
  }

  /* Create a new datastream from the given object
   * @param f The object that, when POSTed to server, returns
   *          a new datastream object.
   */
  create(f) {
    return this.http.post(this.postURL, f)
  }

  /* Update a given datastream.
   * @param f The object that represents the updated values.
   *          Everything except the `id` can be updated.
   */
  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }

  /* Delete the datastream specified by the param.
   * @param id The ID of the datastream to be deleted.
   */
  remove(id) {
    return this.http.delete(this.postURL+"("+id+")")
  }
}
