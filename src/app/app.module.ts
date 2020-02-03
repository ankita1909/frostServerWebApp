import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LocationComponent } from './location/location.component';
import { LocationService } from './location/location.service';

import {
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
} from '@angular/material';

@NgModule({
  declarations: [
      AppComponent,
      LocationComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot([
        { path: '', component: AppComponent },
        { path: 'locations', component: LocationComponent },
      ]),
      AppRoutingModule,
      HttpClientModule,
      MatDividerModule,
      MatSelectModule,
      MatToolbarModule,
      MatTableModule,
  ],
  providers: [
    LocationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
