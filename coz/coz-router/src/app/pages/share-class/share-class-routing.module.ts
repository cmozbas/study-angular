import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareClassComponent } from './share-class.component';

const routes: Routes = [
  { path: '', component: ShareClassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareClassRoutingModule { }
