import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/';
import { auth } from 'firebase/app';


@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'three-directions';
  active = "1";
  
  constructor(public auth: AngularFireAuth){}

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
