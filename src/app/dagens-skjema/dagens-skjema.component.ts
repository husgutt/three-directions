import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-dagens-skjema',
  templateUrl: './dagens-skjema.component.html',
  styleUrls: ['./dagens-skjema.component.css']
})
export class DagensSkjemaComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
