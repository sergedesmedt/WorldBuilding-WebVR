import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Vector3 } from '../property-editors/vector3';

@Component({
  selector: 'basic-scene',
  templateUrl: './basicscene.component.html',
  styleUrls: ['./basicscene.component.css'],
})
export class BasicSceneComponent implements OnInit {
  //@Input() pos = '0 1 -10';
  fov: number = 70;
  near: number = 1;
  far: number = 100;

  posz: number = -5;

  rotx: number = 0;

  boxPosition: string = '0 1 -10';

  onPosChanged(position: Vector3) {
    this.boxPosition = '' + position.x + ' ' + position.y + ' ' + position.z;
  }

  constructor() {}

  ngOnInit() {}
}
