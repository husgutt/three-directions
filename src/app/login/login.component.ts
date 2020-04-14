import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'td-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // items: Observable<any[]>;
  doks : any;
  angDok : AngularFirestoreDocument;
  userTest : any;
  ngOnInit(): void {
    this.auth.user.subscribe({
      next: user => this.userTest = user
    })
  }
  
  constructor(public auth: AngularFireAuth, private firestore : AngularFirestore) {
    this.angDok = this.firestore.collection('users').doc('6ZxbajJsXjXOkba3GE0fYHahMts2');
    this.angDok.valueChanges().subscribe({
      next : doks => this.doks = doks
    });
  }
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  lagre() : void {
    this.auth.user.subscribe({
      next: user => {this.userTest = user;
      this.firestore.collection('users').doc(user.uid).set({name: "test5"});
      }
    })
  }
}