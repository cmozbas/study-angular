import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent }  from './layout.component';

// Starting page 

@NgModule({
  
  imports:      [ 
    BrowserModule, 
    RouterModule
  ],
  declarations: [ LayoutComponent ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
