import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { LeftSidebarService } from '../../service/service.exports';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  fillerNav: string[] = [];
  subscription: Subscription;

  constructor(
    private leftSideBar: LeftSidebarService,
    private router: Router) 
  { 
  }

  ngOnInit() {
    this.subscription = this.leftSideBar.getLeftSideMenu()
    .subscribe(menuName => {
      this.addMenu(menuName);
    });
  }

  private addMenu(menuName: string) {
    const val = this.fillerNav.find(m => m === menuName);

    if (!val) {
      this.fillerNav.push(menuName);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
