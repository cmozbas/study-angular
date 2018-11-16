/* Angular Imports */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Imports */
import { AppComponent }   from './app.component';

/* Core Modules */
import { CoreModule }       from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // The @NgModule metadata imports a single helper module
  imports: [
    /* BrowserModule registers critical application service providers.
    It also includes common directives like NgIf and NgFor, which become
    immediately visible and usable in any of this NgModule's component templates.
    */
    BrowserModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Miss Marple'}),
    AppRoutingModule
  ],
  /**
   * The providers array registers services with the top-level dependency injector
   * Should you provide a service in an NgModule or a component? The answer depends
   * on how you want to scope the service. If the service should be widely available,
   * provide it in an NgModule. If it should be visible only within a component tree,
   * provide it in the component at the root of that tree.
   */
  providers: [],
  // The initial declarations array identifies the application's only component
  declarations: [ AppComponent ],
  /* The bootstrap list identifies the AppComponent as the bootstrap component.
  When Angular launches the app, it renders the AppComponent inside the <app-root>
  element tag of the index.html
  */
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
