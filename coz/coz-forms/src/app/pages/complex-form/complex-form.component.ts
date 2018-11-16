import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
/**
 * Links:
 * https://stackblitz.com/edit/angular-removeformarray?file=app%2Fapp.component.ts
 */
export class ComplexFormComponent implements OnInit {

  fundForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.fundForm = this.formBuilder.group({
      name: '',
      // addresses: this.formBuilder.array([this.getNewAddressGroup(),this.getNewAddressGroup()])
    });
  }

  // get addressGroup(): FormArray {
  //   return this.fundForm.get('addresses') as FormArray;
  // };

  // getNewAddressGroup(): FormGroup {
  //   return this.formBuilder.group(new Address());
  // }

  // addAdress() {
  //   this.addressGroup.push(this.getNewAddressGroup());
  // }
  
  // removeAdress(index:number) {
  //   this.fundForm.controls.addresses.controls.splice(index, 1);
  // }

}
