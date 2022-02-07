import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vector3 } from '../vector3';

@Component({
  selector: 'position-editor',
  templateUrl: './position-editor.component.html',
  styleUrls: ['./position-editor.component.css'],
})
export class PositionEditorComponent implements OnInit {
  @Output() posChangedEvent = new EventEmitter<Vector3>();

  private _posx: number = 0;
  private _posy: number = 0;
  private _posz: number = -5;

  get posx(): number {
    return this._posx;
  }
  set posx(posx: number) {
    this._posx = posx;

    this.posChangedEvent.emit({ x: this.posx, y: this.posy, z: this.posz });
  }

  get posy(): number {
    return this._posy;
  }
  set posy(posy: number) {
    this._posy = posy;

    this.posChangedEvent.emit({ x: this.posx, y: this.posy, z: this.posz });
  }

  get posz(): number {
    return this._posz;
  }
  set posz(posz: number) {
    this._posz = posz;

    this.posChangedEvent.emit({ x: this.posx, y: this.posy, z: this.posz });
  }

  constructor() {}

  ngOnInit() {}
}
