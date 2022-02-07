import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vector3 } from '../vector3';

@Component({
  selector: 'rotation-editor',
  templateUrl: './rotation-editor.component.html',
  styleUrls: ['./rotation-editor.component.css'],
})
export class RotationEditorComponent implements OnInit {
  @Output() rotChangedEvent = new EventEmitter<Vector3>();

  private _rotx: number = 0;
  private _roty: number = 0;
  private _rotz: number = 0;

  get rotx(): number {
    return this._rotx;
  }
  set rotx(rotx: number) {
    this._rotx = rotx;

    this.rotChangedEvent.emit({ x: this.rotx, y: this.roty, z: this.rotz });
  }

  get roty(): number {
    return this._roty;
  }
  set roty(roty: number) {
    this._roty = roty;

    this.rotChangedEvent.emit({ x: this.rotx, y: this.roty, z: this.rotz });
  }

  get rotz(): number {
    return this._rotz;
  }
  set rotz(rotz: number) {
    this._rotz = rotz;

    this.rotChangedEvent.emit({ x: this.rotx, y: this.roty, z: this.rotz });
  }

  constructor() {}

  ngOnInit() {}
}
