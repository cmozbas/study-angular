import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() hero: Fund;
  fundForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  submitForm() {

  }

  createForm() {
    this.fundForm = this.fb.group({
      id: 12,
      name: ['', Validators.required ]
    });
  }

  resetName() {
    this.fundForm.get('name').setValue('COZ default');
  }

}

export class Fund {
  id: number;
  name: string;
}
