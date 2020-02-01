import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocationService } from './location.service';

/* Form to create a new location */
@Component({
  selector: 'form-location',
  templateUrl: './form.html',
})
export class LocationFormComponent {
    name="";
    description="";
    encodingType="";
    location={};
  constructor(
    private locationService: LocationService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (!f.value.id) {
        f.value.location = JSON.parse(f.value.location)
        this.locationService.create(f.value).subscribe(
          data => window.location.href="/#/locations",
          err => console.log(err),
        )
      }
    }
  }
}


/* Form to edit a given location */
@Component({
  selector: 'edit-location',
  templateUrl: './form.html',
})
export class LocationEditComponent {
  _location;
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  set location(location) {
    this._location = JSON.stringify(location)
  }
  @Input()
  encodingType;
  constructor(
    private locationService: LocationService,
  ) { }

  get location() {
    return this._location
  }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.location === "")
        f.value.location = this.location
    if (f.value.encodingType === "")
        f.value.encodingType = this.encodingType
    f.value.id = this.id

    f.value.location = JSON.parse(f.value.location)
    this.locationService.edit(f.value).subscribe(
      data => {
          alert("Updated location successfully.")
          window.location.href="/location/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
