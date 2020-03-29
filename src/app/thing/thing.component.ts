import { Component, OnInit, Input } from '@angular/core';
import { ThingService } from './thing.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

/* Display the list of things available.
 * An input property `listURL` is defined on this component, that allows
 * a user of this component to specify the URL from which the list
 * of things will be fetched to populate the table.
 *
 * If the `listURL` is empty, the component assumes that all things
 * are to be listed.
 */
@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html'
  // styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {
  title = 'Things';
  things;
  @Input()
  listURL = "";
  displayedColumns: string[] = ['name', 'description', 'things',];

  constructor(
    private thingService: ThingService
  ) { }

  /* Get list of things */
  getThings() {
    this.things = this.thingService.getThingsList(this.listURL)
      .subscribe(data => this.things = {
        things: data['value'],
        count:  data['@iot.count'],
        next: data['@iot.nextLink']
    });
  }

  ngOnInit() {
    this.getThings()
  }
}

/* Display a single thing in detail.
 * In form of tabs:
 *  - properties of the things
 *  - editing the thing
 */
@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html'
  // styleUrls: ['./thing.component.css']
})
export class ThingDetailComponent implements OnInit {
  title = 'Thing';
  thing;

  constructor(
    private thingService: ThingService,
    private route: ActivatedRoute,
  ) { }

  /* Get a single thing and associated properties */
  getThing() {
    this.thing = this.route.paramMap.pipe(
      switchMap(params => this.thingService.getThingDetail(params.get('id'))))
          .subscribe(data => this.thing = {
              name: data['name'],
              description: data['description'],
              metadata: data['metadata'],
              id: data['@iot.id'],
        });
  }

  ngOnInit() {
    this.getThing()
  }
}
