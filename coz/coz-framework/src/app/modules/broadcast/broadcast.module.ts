
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BroadcastComponent } from './broadcast.component';
import { BroadcastSubjectComponent } from './subject/broadcast.subject.component';
import { BroadcastBehaviourSubjectComponent } from './behaviour-subject/broadcast.behavioursubject.component';
import { BroadcastReplaySubjectComponent } from './replay-subject/broadcast.replaysubject.component';
import { BroadcastObservableComponent } from './observable/broadcast.observable.component';
import { BroadcastMapComponent } from './map/broadcast.map.component';
import { BroadcastFlatMapComponent } from './flatmap/broadcast.flatmap.component';
import { BroadcastSwitchMapComponent } from './switchmap/broadcast.switchmap.component';
import { BroadcastMergeMapComponent } from './mergemap/broadcast.mergemap.component';
import { BroadcastForkJoinComponent } from './forkjoin/broadcast.forkjoin.component';
import { BroadcastScanComponent } from './scan/broadcast.scan.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'broadcast', component: BroadcastComponent }
    ]),
  ],
  declarations: [ 
    BroadcastComponent,
    BroadcastSubjectComponent,
    BroadcastBehaviourSubjectComponent,
    BroadcastReplaySubjectComponent,
    BroadcastObservableComponent,
    BroadcastMapComponent,
    BroadcastSwitchMapComponent,
    BroadcastMergeMapComponent,
    BroadcastForkJoinComponent,
    BroadcastScanComponent,
    BroadcastFlatMapComponent
  ],
  providers: [
  ],
  exports:[
    BroadcastComponent,
    BroadcastSubjectComponent,
    BroadcastBehaviourSubjectComponent,
    BroadcastReplaySubjectComponent,
    BroadcastObservableComponent,
    BroadcastMapComponent,
    BroadcastSwitchMapComponent,
    BroadcastMergeMapComponent,
    BroadcastForkJoinComponent,
    BroadcastScanComponent,
    BroadcastFlatMapComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BroadcastModule { }