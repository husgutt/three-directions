import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinSideComponent } from './min-side/min-side.component';
import { DagensSkjemaComponent } from './dagens-skjema/dagens-skjema.component';


const routes: Routes = [
  { path: 'dagens-skjema', component: DagensSkjemaComponent},
  { path: 'min-side', component: MinSideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
