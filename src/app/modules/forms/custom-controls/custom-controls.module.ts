import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomControlsComponent } from './custom-controls.component';
import {ReactiveFormsModule} from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CustomControlsComponent],
  declarations: [CustomControlsComponent]
})
export class CustomControlsModule{}
