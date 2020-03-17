import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatastreamService } from './service';

@Component({
  selector: 'create-datastream',
  templateUrl: './form.html',
})
export class DatastreamCreateComponent {
  name;
  description;
  id;
  unitOfMeasurement;
  observationType;

  constructor(
    private datastreamService: DatastreamService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (!f.value.id) {
        f.value.Thing = {
          "@iot.id": f.value.Thing
        }
        f.value.ObservedProperty = {
          "@iot.id": f.value.ObservedProperty
        }
        f.value.Sensor = {
          "@iot.id": f.value.Sensor
        }

        f.value.unitOfMeasurement = JSON.parse(f.value.unitOfMeasurement)
        this.datastreamService.create(f.value).subscribe(
          data => window.location.href="/#/datastreams",
          err => console.log(err),
        )
      }
    }
  }
}


@Component({
  selector: 'edit-datastream',
  templateUrl: './form.html',
})
export class DatastreamEditComponent {
  _unitOfMeasurement;
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  set unitOfMeasurement(unitOfMeasurement) {
    this._unitOfMeasurement = JSON.stringify(unitOfMeasurement)
  }
  @Input()
  observationType;
  constructor(
    private datastreamService: DatastreamService,
  ) { }

  get unitOfMeasurement() {
    return this._unitOfMeasurement
  }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.observationType === "")
        f.value.observationType = this.observationType
    if (f.value.unitOfMeasurement === "")
        f.value.unitOfMeasurement = this.unitOfMeasurement
    f.value.id = this.id

    f.value.unitOfMeasurement = JSON.parse(f.value.unitOfMeasurement)
    this.datastreamService.edit(f.value).subscribe(
      data => {
          alert("Updated datastream successfully.")
          window.location.href="/datastream/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
