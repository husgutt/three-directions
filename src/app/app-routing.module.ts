import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinSideComponent } from './min-side/min-side.component';
import { DagensSkjemaComponent } from './dagens-skjema/dagens-skjema.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { AppComponent } from './app.component';

const redirectLoggedInToDagensSkjema = () => redirectLoggedInTo(["min-side"]);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  // { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToDagensSkjema) }, 
  { path: 'dagens-skjema', component: DagensSkjemaComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'min-side', component: MinSideComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: '',  component: LoginComponent},
  {
    path: "login",
    children: [],
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDagensSkjema }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { path: '',  component: DagensSkjemaComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDagensSkjema }},
//   { path: 'dagens-skjema', component: DagensSkjemaComponent, canActivate: [AngularFireAuthGuard]},
//   { path: 'min-side', component: MinSideComponent, canActivate: [AngularFireAuthGuard]}