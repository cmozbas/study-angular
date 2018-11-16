import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class LeftSidebarService implements OnInit {

  private list = ['nav 1', 'nav 2'];
  public leftSideStack = new Subject<string>();

  constructor(private router: Router) {
    router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationEnd) {
        this.addMenu(router.url);
      }
    });
  }

  ngOnInit() {
  }

  addMenu(menu: string) {
    this.leftSideStack.next(menu);
  }

  getLeftSideMenu(): Observable<string> {
      return this.leftSideStack.asObservable();
  }
}
