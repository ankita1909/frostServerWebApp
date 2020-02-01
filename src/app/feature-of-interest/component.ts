import { Component, OnInit, Input } from '@angular/core';
import { FeatureOfInterestService } from './service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

/**
 * Display the list of features of interest available.
 * An input property `listURL` is defined on this component, that allows
 * a user of this component to specify the URL from which the list
 * of objects will be fetched to populate the table.
 *
 * If the `listURL` is empty, the component assumes that all objects
 * are to be listed.
 */
@Component({
  selector: 'app-feature-of-interest',
  templateUrl: './component-list.html'
})
export class FeatureOfInterestComponent implements OnInit {
  title = 'Features of Interest';
  featuresOfInterest;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['id', 'name', 'description', 'encodingType', 'feature', 'details',];

  constructor(
    private featureOfInterestService: FeatureOfInterestService,
  ) { }

  /* Get list of features of interest. */
  getList() {
    this.featuresOfInterest = this.featureOfInterestService.getList(this.listURL)
      .subscribe(data => this.featuresOfInterest = {
        featuresOfInterest: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getList()
  }
}

/**
 * Display a single feature of interest in detail.
 * In form of tabs:
 *  - properties
 *  - edit this feature of interest
 */
@Component({
  selector: 'app-feature-of-interest-detail',
  templateUrl: './component-detail.html'
})
export class FeatureOfInterestDetailComponent implements OnInit {
  title = 'Feature of Interest';
  featureOfInterest;

  constructor(
    private featureOfInterestService: FeatureOfInterestService,
    private route: ActivatedRoute,
  ) { }

  /* Get a single feature of interest */
  getDetail() {
    this.featureOfInterest = this.route.paramMap.pipe(
      switchMap(params => this.featureOfInterestService.getDetail(params.get('id'))))
        .subscribe(
          (data) => {
            this.featureOfInterest = {
              id: data['@iot.id'],
              name: data['name'],
              description: data['description'],
              encodingType: data['encodingType'],
              feature: data['feature'],
              observationsURL: data['Observations@iot.navigationLink'],
            }
        });
  }

  ngOnInit() {
    this.getDetail()
  }
}
