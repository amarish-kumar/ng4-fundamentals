import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsService } from './forms.service';
import { CustomControlsModule } from './custom-controls/custom-controls.module';

import {ReactiveFormsModule, FormsModule} from "@angular/forms"

const FORMS_MODULE_ROUTES: Routes = [  
  {path: '', component:FormsComponent}  
];
const FORMS_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(FORMS_MODULE_ROUTES);


@NgModule({
  imports: [
    CommonModule,
    FORMS_MODULE_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    CustomControlsModule
  ],
  declarations: [FormsComponent],
  providers:[FormsService]
})
export class FormModule { }
