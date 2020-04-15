import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../user';
import { AuthenticateService } from '../tools/authenticate.service';

@Component({
  selector: 'td-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  userDoc : AngularFirestoreDocument<User>;
  userDocObs : Observable<User>;
  user: firebase.User;
  
  ngOnInit(): void {
    this.authService.auth.user.subscribe({
      next: user => {
        if(user) {
          this.user = user;
          this.userDoc = this.authService.getUserDoc(user);
          this.userDocObs = this.userDoc.valueChanges();
        }
      }
    })
  }


  
  constructor(private authService : AuthenticateService) {}


  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

  lagre() : void {
    this.userDoc.set({name: this.user.displayName});
  }

  
}