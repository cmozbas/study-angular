import { Component, OnInit } from '@angular/core';
import { FundService } from '../../shared/service/service.exports';
import { Fund } from '../../shared/types/types.exports';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  funds: Fund[];

  constructor(private fundService: FundService) { 

  }

  ngOnInit() {
    this.fundService.getAllFund().subscribe(res => this.funds = res);
  }

}
