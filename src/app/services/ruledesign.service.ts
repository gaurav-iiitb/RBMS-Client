import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
//import {RequestOptions, Request, Headers } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RuleDesignService implements OnInit {


  readonly ROOT_URL_RULE = 'http://172.16.128.188:8090/createRule';
  readonly ROOT_URL_USER = 'http://172.16.128.188:8090/createUser';
  
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

}
