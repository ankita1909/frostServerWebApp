import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObservationService } from './service';

/* Form to create a new observation */
@Component({
  selector: 'create-observation',
  templateUrl: './form.html',
})
export class ObservationCreateComponent {
  phenomenonTime;
  result;
  id;
  resultTime;
  constructor(
    private observationService: ObservationService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.observationService.create(f.value).subscribe(
        data => window.location.href="/#/observations",
        err => console.log(err),
      )
    }
  }
}


/* Form to edit a given observation */
@Component({
  selector: 'edit-observation',
  templateUrl: './form.html',
})
export class ObservationEditComponent {
  @Input()
  phenomenonTime;
  @Input()
  result;
  @Input()
  id;
  @Input()
  resultTime;
  constructor(
    private observationService: ObservationService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.value.phenomenonTime === "")
        f.value.phenomenonTime = this.phenomenonTime
    if (f.value.result === "")
        f.value.result = this.result
    if (f.value.resultTime === "")
        f.value.resultTime = this.resultTime
    f.value.id = this.id

    this.observationService.edit(f.value).subscribe(
      data => {
          alert("Updated observation successfully.")
          window.location.href="/observation/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
