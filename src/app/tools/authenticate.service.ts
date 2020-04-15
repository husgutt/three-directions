import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore/';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {


  angDocObs : Observable<User>;

  constructor(public auth: AngularFireAuth, private firestore : AngularFirestore) {
    auth.onAuthStateChanged( function(user) {
      if(user){
        console.log("user: " + user.displayName + " is here")
      }
      else {
        console.log("user is gone :/")
      }
    })
  }

  userDocSubscription() : Observable<User> {
    let returnObs : Observable<User>

    this.auth.user.subscribe({
      next: user => {
          returnObs =  this.firestore.collection('users').doc<User>(user.uid).valueChanges();
      }
    })
    return returnObs;
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  getUserDocObs(user) {
    return this.firestore.collection('users').doc<User>(user.uid).valueChanges()
  }

  getUserDoc(user) {
    return this.firestore.collection('users').doc<User>(user.uid);
  }



}
