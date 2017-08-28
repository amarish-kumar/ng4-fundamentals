import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { TruncateDirective } from './truncate/truncate.directive';


const DIRECTIVES_MODULE_ROUTES: Routes = [  
  {path: '', component:DirectivesComponent}  
];
const DIRECTIVES_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(DIRECTIVES_MODULE_ROUTES);


@NgModule({
  imports: [
    CommonModule,    
    DIRECTIVES_MODULE_ROUTING
  ],
  declarations: [DirectivesComponent, TruncateDirective]
})
export class DirectivesModule { }