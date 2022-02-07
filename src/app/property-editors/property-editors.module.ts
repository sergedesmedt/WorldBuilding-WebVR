import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PositionEditorComponent } from './position-editor/position-editor.component';
import { Vector3 } from './vector3';

@NgModule({
  exports: [PositionEditorComponent],
  imports: [CommonModule, FormsModule],
  declarations: [PositionEditorComponent],
})
export class PropertyEditorsModule {}
