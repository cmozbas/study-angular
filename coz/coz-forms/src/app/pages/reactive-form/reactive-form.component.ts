import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  isEdit = false;
  time = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit() {
  }

  displayEdit() {
    this.isEdit = true;
  }
}
