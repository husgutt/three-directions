import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'td-dagens-skjema',
  templateUrl: './dagens-skjema.component.html',
  styleUrls: ['./dagens-skjema.component.css']
})
export class DagensSkjemaComponent implements OnInit {
  active = 1;

  constructor(private firestore : AngularFirestore) { }

  items: Observable<any[]>;

  ngOnInit(): void {
    this.items = this.firestore.collection('users').valueChanges();
  }


}
