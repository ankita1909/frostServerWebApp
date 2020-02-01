import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeatureOfInterestService } from './service';

/* Form to create a new datastream */
@Component({
  selector: 'create-feature-of-interest',
  templateUrl: './form.html',
})
export class FeatureOfInterestCreateComponent {
  name;
  description;
  id;
  feature;
  encodingType;

  constructor(
    private featureOfInterestService: FeatureOfInterestService,
  ) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      if (!f.value.id) {
        f.value.feature = JSON.parse(f.value.feature)
        this.featureOfInterestService.create(f.value).subscribe(
          data => window.location.href="/#/features-of-interest",
          err => console.log(err),
        )
      }
    }
  }
}


/* Form to edit a given datastream */
@Component({
  selector: 'edit-feature-of-interest',
  templateUrl: './form.html',
})
export class FeatureOfInterestEditComponent {
  _feature;
  @Input()
  name;
  @Input()
  description;
  @Input()
  id;
  @Input()
  set feature(feature) {
    this._feature = JSON.stringify(feature)
  }
  @Input()
  encodingType;
  constructor(
    private featureOfInterestService: FeatureOfInterestService,
  ) { }

  get feature() {
    return this._feature
  }

  onSubmit(f: NgForm) {
    if (f.value.name === "")
        f.value.name = this.name
    if (f.value.description === "")
        f.value.description = this.description
    if (f.value.encodingType === "")
        f.value.encodingType = this.encodingType
    if (f.value.feature === "")
        f.value.feature = this.feature
    f.value.id = this.id

    f.value.feature = JSON.parse(f.value.feature)
    this.featureOfInterestService.edit(f.value).subscribe(
      data => {
          alert("Updated feature of interest successfully.")
          window.location.href="/feature-of-interest/"+f.value.id
      },
      err => console.log(err),
    )
  }
}
