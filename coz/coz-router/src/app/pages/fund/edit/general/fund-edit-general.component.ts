import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Fund } from '../../../../shared/types/fund';

@Component({
  selector: 'app-fund-edit-general',
  templateUrl: './fund-edit-general.component.html',
  styleUrls: ['./fund-edit-general.component.css']
})
export class FundEditGeneralComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() fund: Fund;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initControls();
  }

  initControls() {
    this.parentFormGroup.addControl('id', new FormControl({value: this.fund.id, disabled: true}));
    this.parentFormGroup.addControl('name', new FormControl(this.fund.name));
    this.parentFormGroup.addControl('legalName', new FormControl(this.fund.legalName));
    this.parentFormGroup.addControl('umbrella', new FormControl(this.fund.umbrella));
    this.parentFormGroup.addControl('creationDate', new FormControl(this.fund.creationDate));
  }
}
