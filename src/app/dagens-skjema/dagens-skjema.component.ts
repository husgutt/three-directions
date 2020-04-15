import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/';
import { User } from '../user';
import { AuthenticateService } from '../tools/authenticate.service';

@Component({
  selector: 'td-dagens-skjema',
  templateUrl: './dagens-skjema.component.html',
  styleUrls: ['./dagens-skjema.component.css']
})
export class DagensSkjemaComponent implements OnInit {
  active = 1;

  constructor(private authService : AuthenticateService) { }

  userDoc : AngularFirestoreDocument<User>;
  userDocObs : Observable<User>;
  user: firebase.User;
  userSkjema : Observable<firebase.firestore.DocumentSnapshot>;
  
  ngOnInit(): void {
    this.authService.auth.user.subscribe({
      next: user => {
        if(user) {
          this.user = user;
          this.userDoc = this.authService.getUserDoc(user);
          this.userSkjema = this.userDoc.get();
          
          this.userDocObs = this.userDoc.valueChanges();
        }
      }
    })
  }
}
