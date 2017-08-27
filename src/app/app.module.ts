import { BrowserModule} from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [  
  {path:'', redirectTo:'filter-module', pathMatch:'full'},
  {path: 'filter-module', loadChildren: './modules/filter-builder/filter-builder.module#FilterBuilderModule'},
  {path: 'forms-module', loadChildren: './modules/forms/forms.module#FormModule'},
  {path: 'pipes-module', loadChildren: './modules/pipes/pipes.module#PipesModule'}  
];
const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
