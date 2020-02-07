import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LocationComponent, LocationDetailComponent } from './location/location.component';
import { ThingComponent, ThingDetailComponent } from './thing/thing.component';
import { SensorComponent, SensorDetailComponent } from './sensor/sensor.component';
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
} from '@angular/material';

@NgModule({
  declarations: [
      AppComponent,
      LocationComponent,
      LocationDetailComponent,
      ThingComponent,
      ThingDetailComponent,
      ToolbarComponent,
      HomeComponent,
      SensorComponent,
      SensorDetailComponent,
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'locations', component: LocationComponent },
        { path: 'location/:id', component: LocationDetailComponent },
        { path: 'things', component: ThingComponent },
        { path: 'thing/:id', component: ThingDetailComponent },
        { path: 'sensors', component: SensorComponent },
        { path: 'sensor/:id', component: SensorDetailComponent },
      ]),
      HttpClientModule,
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
      AppRoutingModule,
  ],
  providers: [
    LocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
