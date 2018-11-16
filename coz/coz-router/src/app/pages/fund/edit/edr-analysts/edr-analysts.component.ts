import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EdrAnalyst } from '../../../../shared/types/types.exports';

@Component({
  selector: 'app-edr-analysts',
  templateUrl: './edr-analysts.component.html',
  styleUrls: ['./edr-analysts.component.css']
})
export class EdrAnalystsComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  private controlName = 'edrAnalysts';
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parentFormGroup.addControl('edrAnalysts', this.formBuilder.array([this.getNewGroup()]));
  }

  get currentList(): FormArray {
    return this.parentFormGroup.get('edrAnalysts') as FormArray;
  };

  getNewGroup(): FormGroup {
    return this.formBuilder.group(new EdrAnalyst());
  }

  add() {
    this.currentList.push(this.getNewGroup());
  }
  
  remove(index:number) {
    const addr = this.parentFormGroup.get('edrAnalysts') as FormArray;
    addr.controls.splice(index, 1);
  }
}

