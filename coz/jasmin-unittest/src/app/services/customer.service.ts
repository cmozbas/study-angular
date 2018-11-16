import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomerFullName(customer:Customer): string{
    const fullName = customer.firstName + ' ' + customer.name;
    
    return fullName;
  }
}
