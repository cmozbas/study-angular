import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form-share-class',
  templateUrl: './complex-form-share-class.component.html',
  styleUrls: ['./complex-form-share-class.component.css']
})
export class ComplexFormShareClassComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Add address control
    this.parentFormGroup.addControl('addresses', this.formBuilder.array([this.getNewAddressGroup()]));
  }

  get addressGroup(): FormArray {
    return this.parentFormGroup.get('addresses') as FormArray;
  };

  getNewAddressGroup(): FormGroup {
    return this.formBuilder.group(new Address());
  }

  addAdress() {
    this.addressGroup.push(this.getNewAddressGroup());
  }
  
  removeAdress(index:number) {
    this.parentFormGroup.controls.addresses.controls.splice(index, 1);
  }
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}