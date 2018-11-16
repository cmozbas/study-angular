import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundService } from './fund/fund.service';
import { LeftSidebarService } from './leftSideBar/left-sidebar.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  providers: [
    FundService,
    LeftSidebarService
  ]
})
export class ServiceModule { }
