import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DagensSkjemaComponent } from './dagens-skjema/dagens-skjema.component';
import { SkjemaComponent } from './dagens-skjema/skjema/skjema.component';

@NgModule({
  declarations: [
    AppComponent,
    DagensSkjemaComponent,
    SkjemaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
