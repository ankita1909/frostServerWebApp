import { Component, OnInit, Input } from '@angular/core';
import { ObservationService } from './service';
import { FeatureOfInterestService } from '../feature-of-interest/service';
import { DatastreamService } from '../datastream/service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

/* Display the list of observations available.
 * An input property `listURL` is defined on this component, that allows
 * a user of this component to specify the URL from which the list
 * of observations will be fetched to populate the table.
 *
 * If the `listURL` is empty, the component assumes that all observations
 * are to be listed.
 */
@Component({
  selector: 'app-observation',
  templateUrl: './component-list.html'
})
export class ObservationComponent implements OnInit {
  title = 'Observations';
  observations;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['id', 'phenomenonTime', 'result', 'resultTime', 'details',];

  constructor(
    private observationService: ObservationService,
  ) { }

  /* Get list of observations */
  getObservations() {
    this.observations = this.observationService.getList(this.listURL)
      .subscribe(data => this.observations = {
        observations: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getObservations()
  }
}

/* Display a single observation in detail.
 * In form of tabs:
 *  - datastream
 *  - feature of interest
 *  - properties of the observation
 *  - editing the observation
 */
@Component({
  selector: 'app-observation-detail',
  templateUrl: './component-detail.html'
})
export class ObservationDetailComponent implements OnInit {
  title = 'Observation';
  observation;
  datastream;
  featureOfInterest;

  constructor(
    private observationService: ObservationService,
    private datastreamService: DatastreamService,
    private featureOfInterestService: FeatureOfInterestService,
    private route: ActivatedRoute,
  ) { }

  /* Get a single observation and associated datastream and feature of interest */
  getObservation() {
    this.observation = this.route.paramMap.pipe(
      switchMap(params => this.observationService.getDetail(params.get('id'))))
        .subscribe(
          (data) => {
            this.observation = {
              id: data['@iot.id'],
              phenomenonTime: data['phenomenonTime'],
              result: data['result'],
              resultTime: data['resultTime'],
              datastreamURL: data['Datastream@iot.navigationLink'],
              featureOfInterestURL: data['FeatureOfInterest@iot.navigationLink'],
            }
            this.datastream = this.datastreamService.getDetail(undefined, this.observation.datastreamURL).subscribe(
              data => this.datastream = data
            )
            this.featureOfInterest = this.featureOfInterestService.getDetail(undefined, this.observation.featureOfInterestURL).subscribe(
              data => this.featureOfInterest = data
            )
        });
  }

  ngOnInit() {
    this.getObservation()
  }
}
