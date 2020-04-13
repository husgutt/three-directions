import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinSideComponent } from './min-side/min-side.component';
import { DagensSkjemaComponent } from './dagens-skjema/dagens-skjema.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '',  component: LoginComponent},
  { path: 'dagens-skjema', component: DagensSkjemaComponent, canActivate: [AngularFireAuthGuard]},
  { path: 'min-side', component: MinSideComponent, canActivate: [AngularFireAuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
