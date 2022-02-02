import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { toAFrame } from './toAFrame.pipe';
import { BasicSceneComponent } from './BasicScene/basicscene.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatSliderModule],
  declarations: [AppComponent, HelloComponent, toAFrame, BasicSceneComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
