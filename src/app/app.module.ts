import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LocationComponent, LocationDetailComponent } from './location/location.component';
import { LocationFormComponent, LocationEditComponent } from './location/form';
import { HistoricalLocationComponent, HistoricalLocationDetailComponent } from './historical_locations/component';
import { ThingComponent, ThingDetailComponent } from './thing/thing.component';
import { SensorComponent, SensorDetailComponent } from './sensor/sensor.component';
import { DatastreamComponent, DatastreamDetailComponent } from './datastream/component';
import { ObservationComponent, ObservationDetailComponent } from './observation/component';
import { ObservedPropertyComponent, ObservedPropertyDetailComponent } from './observed-property/component';
import { FeatureOfInterestComponent, FeatureOfInterestDetailComponent } from './feature-of-interest/component';
import { LocationService } from './location/location.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home.component';

import {
  MatToolbarModule,
  MatDividerModule,
  MatSelectModule,
  MatTableModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatFormField,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationDetailComponent,
    LocationFormComponent,
    LocationEditComponent,
    HistoricalLocationComponent,
    HistoricalLocationDetailComponent,
    ThingComponent,
    ThingDetailComponent,
    ToolbarComponent,
    HomeComponent,
    SensorComponent,
    SensorDetailComponent,
    DatastreamComponent,
    DatastreamDetailComponent,
    ObservationComponent,
    ObservationDetailComponent,
    FeatureOfInterestComponent,
    FeatureOfInterestDetailComponent,
    ObservedPropertyComponent,
    ObservedPropertyDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'locations', component: LocationComponent },
      { path: 'location/:id', component: LocationDetailComponent },
      { path: 'historical-locations', component: HistoricalLocationComponent },
      { path: 'historical-location/:id', component: HistoricalLocationDetailComponent },
      { path: 'things', component: ThingComponent },
      { path: 'thing/:id', component: ThingDetailComponent },
      { path: 'sensors', component: SensorComponent },
      { path: 'sensor/:id', component: SensorDetailComponent },
      { path: 'datastreams', component: DatastreamComponent },
      { path: 'datastream/:id', component: DatastreamDetailComponent },
      { path: 'observations', component: ObservationComponent },
      { path: 'observation/:id', component: ObservationDetailComponent },
      { path: 'features-of-interest', component: FeatureOfInterestComponent },
      { path: 'feature-of-interest/:id', component: FeatureOfInterestDetailComponent },
      { path: 'observed-properties', component: ObservedPropertyComponent },
      { path: 'observed-property/:id', component: ObservedPropertyDetailComponent },
    ]),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    AppRoutingModule,
  ],
  providers: [
    LocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
