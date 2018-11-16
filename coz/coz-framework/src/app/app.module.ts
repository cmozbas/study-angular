import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from './modules/layout/layout.module';
import { MessageModule } from './modules/message/message.module';
import { ChildViewModule } from './modules/child-view/child.view.module';
import { BroadcastModule } from './modules/broadcast/broadcast.module';
import { NgzoneModule } from './modules/ngzone/ngzone.module';

import { LayoutComponent }  from './modules/layout/layout.component';
import { AppComponent }  from './app.component';

// Message module import allready this component so app component can't declare it
// If I want to use message component inside the app component, AppComponent shouldn't
// declare MessageComponent or MessageModule
// import { MessageComponent }  from './modules/message/message.component';

@NgModule({
  
  imports:      [ 
    BrowserModule, 
    LayoutModule,
    MessageModule,
    ChildViewModule,
    BroadcastModule,
    NgzoneModule,
    RouterModule.forRoot([
      { path: 'index', component: LayoutComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index', pathMatch: 'full' }
    ]),
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  exports: [
    HttpModule,
    FormsModule
  ]
})
export class AppModule { }
