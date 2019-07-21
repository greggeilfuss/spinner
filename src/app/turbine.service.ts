import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Settings, TurbineConfig } from './settings';
import { Customer } from './customer/customer';

const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'applicaiton/json',
   'Access-Control-Allow-Origin': '*'
 })
};

@Injectable({
  providedIn: 'root'
})

export class TurbineService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    http.get('./assets/server-config').subscribe(() => {
      const config: TurbineConfig = new TurbineConfig();
      this.apiUrl = config.server + config.baseUrl;
    });
  }

  get customers() {
    return '';
  }

  getCustomer(arg: string) {
    return '';
  }

  set customer(arg: Customer) {

  }

  get notes() {
    return '';
  }

  set note(arg: string) {

  }
  postObject(){}
  getObject(){}
}
