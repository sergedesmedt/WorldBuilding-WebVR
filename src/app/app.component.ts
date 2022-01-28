import { Component, OnInit, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() pos = '0 1 -2';
  name = 'Angular ' + VERSION.major;
  test: number = 90;

  constructor() {}

  ngOnInit() {}
}
