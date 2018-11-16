
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MessageComponent } from './message.component'
import { MessageService } from './message.service'
import { FrameworkService } from '../../services/framework.service'

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'message', component: MessageComponent }
    ]),
  ],
  declarations: [ 
    MessageComponent 
  ],
  providers: [
    MessageService,
    FrameworkService
  ],
  exports:[
    MessageComponent
  ]
})
export class MessageModule { }