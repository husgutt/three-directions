import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DagensSkjemaComponent } from './dagens-skjema/dagens-skjema.component';
import { SkjemaComponent } from './dagens-skjema/skjema/skjema.component';
import { MinSideComponent } from './min-side/min-side.component';
import { ProfilComponent } from './min-side/profil/profil.component';
import { HistorikkComponent } from './min-side/historikk/historikk.component';
import { HistorikkDetaljerComponent } from './min-side/historikk/historikk-detaljer/historikk-detaljer.component';
import { UtviklingComponent } from './min-side/utvikling/utvikling.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    DagensSkjemaComponent,
    SkjemaComponent,
    MinSideComponent,
    ProfilComponent,
    HistorikkComponent,
    HistorikkDetaljerComponent,
    UtviklingComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
