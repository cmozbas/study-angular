import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule'},
  { path:'basket', loadChildren:'./basket/basket.module#BasketModule' },
  { path:'products', loadChildren:'./product/product.module#ProductModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
