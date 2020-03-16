import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObservedPropertyService } from './service';

@Component({
  selector: 'create-observed-property',
  templateUrl: './form.html',
})
export class ObservedPropertyCreateComponent {
  name;
  description;
  id;
  definition;
  constructor(
    private observedPropertyService: ObservedPropertyService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.observedPropertyService.create(f.value).subscribe(
        data => window.location.href="/observed-properties",
        err => console.log(err),
      )
    }
  }
}


@Component({
  selector: 'edit-observed-property',
  templateUrl: './form.html',
})
export class ObservedPropertyEditComponent {
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  definition;
  constructor(
    private observedPropertyService: ObservedPropertyService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.definition === "")
        f.value.definition = this.definition
    f.value.id = this.id

    this.observedPropertyService.edit(f.value).subscribe(
      data => {
          alert("Updated observed property successfully.")
          window.location.href="/observed-property/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
