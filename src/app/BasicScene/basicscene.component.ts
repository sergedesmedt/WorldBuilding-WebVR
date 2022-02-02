import { Component, OnInit, Input, VERSION } from '@angular/core';

@Component({
  selector: 'basic-scene',
  templateUrl: './basicscene.component.html',
  styleUrls: ['./basicscene.component.css'],
})
export class BasicSceneComponent implements OnInit {
  @Input() pos = '0 1 -10';
  fov: number = 70;
  near: number = 1;
  far: number = 100;

  posz: number = -5;

  rotx: number = 0;

  constructor() {}

  ngOnInit() {}
}
