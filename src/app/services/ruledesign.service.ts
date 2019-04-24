import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { AccountTable } from '../models/AccountTable';
//import {RequestOptions, Request, Headers } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RuleDesignService implements OnInit {


  readonly ROOT_URL_RULE = 'http://localhost:8090/createRule';
  readonly ROOT_URL_USER = 'http://localhost:8090/createUser';
  readonly ROOT_URL_INIT = 'http://localhost:8090/init';
  readonly ROOT_ACCOUNT = 'http://localhost:8090/getAccount';
  readonly ROOT_TRANSACTIONS = 'http://localhost:8090/getTransactions';
  readonly ROOT_UPDATE = 'http://localhost:8090/updateTables';

  private acc_number: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  createRule(data: any): Observable<any> {
 
    return this.http.post(this.ROOT_URL_RULE, data);
  }

  createUser(data: any): Observable<any> {
 
    return this.http.post(this.ROOT_URL_USER, data);
  }

  setAccNumber(data: any) {
    this.acc_number = data;
  }

  getAccNumber() {
    return this.acc_number;
  }

  initialize() {
    return this.http.get(this.ROOT_URL_INIT);
  }

  getAccount(data: any): Observable<any> {
    return this.http.post(this.ROOT_ACCOUNT, data);
  }

  getTransactions(data: any): Observable<any> {
    return this.http.post(this.ROOT_TRANSACTIONS, data);
  }

  updateTables(data: AccountTable): Observable<any> {

    console.log(data);
    return this.http.post(this.ROOT_UPDATE, data);
  }

}
