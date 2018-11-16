import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedComponentModule } from './shared/component/shared-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedExternalComponentModule } from './shared/shared-external-component.module';
import { ServiceModule } from './shared/service/service.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    BrowserAnimationsModule,
    SharedExternalComponentModule,
    ServiceModule,
    HomeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
