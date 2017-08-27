import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterBuilderComponent } from './filter-builder.component';
import { FilterBuilderService } from './filter-builder.service';


const FILTER_MODULE_ROUTES: Routes = [  
  {path: '', component:FilterBuilderComponent}  
];
const FILTER_MODULE_ROUTING: ModuleWithProviders = RouterModule.forChild(FILTER_MODULE_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    FILTER_MODULE_ROUTING
  ],
  declarations: [FilterBuilderComponent],
  providers:[FilterBuilderService]
})
export class FilterBuilderModule { }