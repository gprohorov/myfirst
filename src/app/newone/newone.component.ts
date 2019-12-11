import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit {
  message: string;
  isok = false;
  items = ['John Lenon', 'Paul McCartney', 'Ring Star', 'George Harrison'];
  seen: boolean;
  constructor() {
    this.message = 'world ' + new Date().toDateString() + ' ' + new Date().toTimeString();
    this.seen = true;
  }

  onClick(event) {
    console.log(event);
  }
  reverse() {
    this.seen = !this.seen;
  }
  ngOnInit() {
  }

}
