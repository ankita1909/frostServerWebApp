import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SensorService } from './sensor.service';

/* Form to create a new sensor */
@Component({
  selector: 'create-sensor',
  templateUrl: './form.html',
})
export class SensorCreateComponent {
  name;
  description;
  id;
  metadata;
  encodingType;
  constructor(
    private sensorService: SensorService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.sensorService.create(f.value).subscribe(
        data => window.location.href="/#/sensors",
        err => console.log(err),
      )
    }
  }
}


/* Form to edit a given sensor */
@Component({
  selector: 'edit-sensor',
  templateUrl: './form.html',
})
export class SensorEditComponent {
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  metadata;
  @Input()
  encodingType;
  constructor(
    private sensorService: SensorService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.encodingType === "")
        f.value.encodingType = this.encodingType
    if (f.value.metadata === "")
        f.value.metadata = this.metadata
    f.value.id = this.id

    this.sensorService.edit(f.value).subscribe(
      data => {
          alert("Updated sensor successfully.")
          window.location.href="/sensor/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
