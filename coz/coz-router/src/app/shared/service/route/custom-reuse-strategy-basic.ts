
import { Injectable } from '@angular/core';
import {
  Router,
  Route,
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CustomReuseStrategyBasic implements RouteReuseStrategy {

  shouldDetach(route: ActivatedRouteSnapshot): boolean{
    return false;
  }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void{

  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // Default config
    // return future.routeConfig === curr.routeConfig;

    // routerLink should be "/home" not just "home" !!
    return false;
  }
}
