import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { LeftSidebarService } from '../../service/service.exports';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  fillerNav: string[] = [];
  subscription: Subscription;
  isShow = true;
  btnTitle = 'close';

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

  toggleFooter(){
    this.isShow = !this.isShow;
    if(this.isShow){
      this.btnTitle = 'close';
    } else {
      this.btnTitle = 'open';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
