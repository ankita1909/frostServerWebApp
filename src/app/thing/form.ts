import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThingService } from './thing.service';

@Component({
  selector: 'create-thing',
  templateUrl: './form.html',
})
export class ThingCreateComponent {
  name;
  description;
  id;
  properties;
  constructor(
    private thingService: ThingService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (!f.value.id) {
        f.value.properties = JSON.parse(f.value.properties)
        this.thingService.create(f.value).subscribe(
          data => window.location.href="/things",
          err => console.log(err),
        )
      }
    }
  }
}


@Component({
  selector: 'edit-thing',
  templateUrl: './form.html',
})
export class ThingEditComponent {
  _properties;
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  set properties(properties) {
    this._properties = JSON.stringify(properties)
  }
  constructor(
    private thingService: ThingService,
  ) { }

  get properties() {
    return this._properties
  }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.properties === "")
        f.value.properties = this.properties
    f.value.id = this.id

    f.value.properties = JSON.parse(f.value.properties)
    this.thingService.edit(f.value).subscribe(
      data => {
          alert("Updated thing successfully.")
          window.location.href="/location/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
