import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vector3 } from '../vector3';

@Component({
  selector: 'scale-editor',
  templateUrl: './scale-editor.component.html',
  styleUrls: ['./scale-editor.component.css'],
})
export class ScaleEditorComponent implements OnInit {
  @Output() scaleChangedEvent = new EventEmitter<Vector3>();

  private _sx: number = 1;
  private _sy: number = 1;
  private _sz: number = 1;

  get sx(): number {
    return this._sx;
  }
  set sx(sx: number) {
    this._sx = sx;

    this.scaleChangedEvent.emit({ x: this.sx, y: this.sy, z: this.sz });
  }

  get sy(): number {
    return this._sy;
  }
  set sy(sy: number) {
    this._sy = sy;

    this.scaleChangedEvent.emit({ x: this.sx, y: this.sy, z: this.sz });
  }

  get sz(): number {
    return this._sz;
  }
  set sz(sz: number) {
    this._sz = sz;

    this.scaleChangedEvent.emit({ x: this.sx, y: this._sy, z: this.sz });
  }

  constructor() {}

  ngOnInit() {}
}
