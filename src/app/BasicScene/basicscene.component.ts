import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Vector3 } from '../property-editors/vector3';

@Component({
  selector: 'basic-scene',
  templateUrl: './basicscene.component.html',
  styleUrls: ['./basicscene.component.css'],
})
export class BasicSceneComponent implements OnInit {
  fov: number = 70;
  near: number = 1;
  far: number = 100;

  boxPosition: string = '0 0 -5';
  boxRotation: string = '0 0 0';
  boxScale: string = '1 1 1';

  onPosChanged(position: Vector3) {
    this.boxPosition = '' + position.x + ' ' + position.y + ' ' + position.z;
  }

  onRotChanged(rotation: Vector3) {
    this.boxRotation = '' + rotation.x + ' ' + rotation.y + ' ' + rotation.z;
  }

  onScaleChanged(scale: Vector3) {
    this.boxScale = '' + scale.x + ' ' + scale.y + ' ' + scale.z;
  }

  constructor() {}

  ngOnInit() {}
}
