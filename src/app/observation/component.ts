import { Component, OnInit, Input } from '@angular/core';
import { ObservationService } from './service';
import { FeatureOfInterestService } from '../feature-of-interest/service';
import { DatastreamService } from '../datastream/service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

@Component({
  selector: 'app-datastream-detail',
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
