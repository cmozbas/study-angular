import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Fund } from '../../../shared/types/fund';
import { FundService } from '../../../shared/service/service.exports';
import { ActivatedRoute, ParamMap, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-fund-edit',
  templateUrl: './fund-edit.component.html',
  styleUrls: ['./fund-edit.component.css']
})
export class FundEditComponent implements OnInit, OnDestroy {
  
  fundForm: FormGroup;
  fund: Fund;

  constructor(
    private formBuilder: FormBuilder,
    private fundService: FundService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    
    this.route.paramMap.switchMap((params: ParamMap) => {
      const fundId = params.get('id');
      if(fundId) {
        return this.fundService.getFundById(+fundId);
      }
      else {
        return Observable.of(null);
      }
    }).subscribe(f => this.fund = f);

    this.createForm();
  }

  createForm() {
    this.fundForm = this.formBuilder.group({
    });
  }

  ngOnDestroy(){
  }
}
