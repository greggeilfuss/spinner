import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer>;

  constructor() { }

  ngOnInit() {
  }

  getCustomers() {
    return this.customers;
  }

}
