import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PositionEditorComponent } from './position-editor/position-editor.component';
import { RotationEditorComponent } from './rotation-editor/rotation-editor.component';

@NgModule({
  exports: [PositionEditorComponent, RotationEditorComponent],
  imports: [CommonModule, FormsModule],
  declarations: [PositionEditorComponent, RotationEditorComponent],
})
export class PropertyEditorsModule {}
