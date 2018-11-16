import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundComponent } from './fund.component';
import { FundEditComponent } from './edit/fund-edit.component';
import { FundDisplayComponent } from './display/fund-display.component';

const routes: Routes = [
    { path: '',  component: FundComponent },
    { path: 'edit/:id', component: FundEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutingModule { }
