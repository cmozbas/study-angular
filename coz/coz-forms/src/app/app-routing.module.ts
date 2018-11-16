import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ReactiveFormModule } from './pages/reactive-form/reactive-form.module';
import { ComplexFormModule } from './pages/complex-form/complex-form.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    ReactiveFormModule,
    ComplexFormModule
  ],
  exports: [
    RouterModule,
    HomeModule,
    ReactiveFormModule,
    ComplexFormModule
  ]
})
export class AppRoutingModule { }
