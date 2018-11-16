import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategyBasic } from './shared/service/route/custom-reuse-strategy-basic';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'fund', loadChildren: 'app/pages/fund/fund.module#FundModule' },
  { path: 'shareClass', loadChildren: 'app/pages/share-class/share-class.module#ShareClassModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategyBasic}
  ]
})
export class AppRoutingModule { }
