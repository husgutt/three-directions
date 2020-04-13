import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {

  active = "top";

  constructor() { }

  ngOnInit(): void {
  }

}
