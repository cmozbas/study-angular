import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fund-display',
  templateUrl: './fund-display.component.html',
  styleUrls: ['./fund-display.component.css']
})
export class FundDisplayComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
