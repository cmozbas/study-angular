
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { ChildViewComponent } from './child/child.view.component'
import { SharedParentComponent } from './shared/shared.parent.component'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'childview', component: ChildViewComponent }
    ]),
  ],
  declarations: [ 
    ChildViewComponent,
    SharedParentComponent
  ],
  exports:[
    ChildViewComponent,
    SharedParentComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ChildViewModule { }