import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { UpperCasePipe } from '@angular/common';
import { Truncate } from './custom-pipes.pipe';

const PIPES_MODULE_ROUTES: Routes = [  
  {path: '', component:PipesComponent}  
];
const PIPES_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(PIPES_MODULE_ROUTES);



@NgModule({
  imports: [
    CommonModule,
    PIPES_MODULE_ROUTING
  ],
  declarations: [PipesComponent, Truncate]
})
export class PipesModule { }
