import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [
    `
      .textcolor {
        color : white
      }
    `
  ]
})
export class AssignmentComponent implements OnInit {

  toggle = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  performAction() {
    this.toggle = !this.toggle;
    this.clicks.push(new Date());
  }
}
