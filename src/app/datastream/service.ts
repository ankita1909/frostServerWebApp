import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getList(url) {
    this.list = this.http.get(url || this.listURL);
    return this.list;
  }

  getDetail(id?, url?) {
    this.detail = this.http.get(url || this.detailURL + "(" + id + ")");
    return this.detail;
  }

  create(f) {
    return this.http.post(this.postURL, f)
  }

  edit(f) {
    return this.http.patch(this.postURL+"("+f.id+")", f)
  }
}
