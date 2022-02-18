import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PositionEditorComponent } from './position-editor/position-editor.component';
import { RotationEditorComponent } from './rotation-editor/rotation-editor.component';
import { ScaleEditorComponent } from './scale-editor/scale-editor.component';

@NgModule({
  exports: [
    PositionEditorComponent,
    RotationEditorComponent,
    ScaleEditorComponent,
  ],
  imports: [CommonModule, FormsModule],
  declarations: [
    PositionEditorComponent,
    RotationEditorComponent,
    ScaleEditorComponent,
  ],
})
export class PropertyEditorsModule {}
