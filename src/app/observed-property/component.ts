import { Component, OnInit, Input } from '@angular/core';
import { ObservedPropertyService } from './service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-observed-property',
  templateUrl: './component-list.html'
})
export class ObservedPropertyComponent implements OnInit {
  title = 'Observed Property';
  observedProperties;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['id', 'name', 'definition', 'description', 'details',];

  constructor(
    private observedPropertyService: ObservedPropertyService,
  ) { }

  getList() {
    this.observedProperties = this.observedPropertyService.getList(this.listURL)
      .subscribe(data => this.observedProperties = {
        observedProperties: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getList()
  }
}

@Component({
  selector: 'app-observed-property-detail',
  templateUrl: './component-detail.html'
})
export class ObservedPropertyDetailComponent implements OnInit {
  title = 'Observed Property';
  observedProperty;

  constructor(
    private observedPropertyService: ObservedPropertyService,
    private route: ActivatedRoute,
  ) { }

  getDetail() {
    this.observedProperty = this.route.paramMap.pipe(
      switchMap(params => this.observedPropertyService.getDetail(params.get('id'))))
        .subscribe(
          (data) => {
            this.observedProperty = {
              id: data['@iot.id'],
              name: data['name'],
              description: data['description'],
              definition: data['definition'],
              datastreamsURL: data['Datastreams@iot.navigationLink'],
            }
        });
  }

  ngOnInit() {
    this.getDetail()
  }
}
