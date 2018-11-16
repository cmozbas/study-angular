import { Injectable } from '@angular/core';
import { Fund } from '../../types/types.exports';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class FundService {

  constructor() { }

  getAllFund(): Observable<Fund[]> {
    return Observable.of(FUNDS);
  }

  getFundById(id: number): Observable<Fund> {
    return this.getAllFund().map(funds => funds.find(p => p.id === id));
  }
}

const FUNDS: Fund[] = [
  new Fund(1, 'Campbell Managed Synergy', 'Campbell Managed Synergy', 'umbrealla 1', '2017'),
  new Fund(2, '1618 Investment Bond Euro EUR', '1618 Investment Bond Euro EUR', 'umbrealla 2', '2007'),
  new Fund(3, 'Algert Global Equity Market Neutral Fund, Ltd. USD', 'Algert Global Equity Market Neutral Fund, Ltd. USD', 'umbrealla 3', '2017')
];


