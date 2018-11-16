import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';

const routes = [
  { path: 'reactiveForms', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
