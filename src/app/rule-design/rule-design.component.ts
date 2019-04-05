import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { promise } from 'protractor';
import { RuleDesignService } from './../services/ruledesign.service';
import { Rule } from './../models/rule';
import { Rules } from '../models/Rules';
import { LHS } from '../models/LHS';
import { RHS } from '../models/RHS';
import { Condition } from '../models/Condition';
import { Clause } from '../models/Clause';
import { RuleList } from '../models/RuleList';
import { DatainterchangeService } from '../services/datainterchange.service';

@Component({
  selector: 'app-rule-design',
  templateUrl: './rule-design.component.html',
  styleUrls: ['./rule-design.component.css']
})
export class RuleDesignComponent implements OnInit {

  private table: any;
  private element: any;
  private op1: any;
  private op2: any;
  private value: any;
  private type: any;
  private message: any;
  private data: Rule;
  private radio: any;

  private condition_list: Condition[] = [];
  @ViewChild('action') action: ElementRef;
  @ViewChild('ip1') ip1: ElementRef;
  @ViewChild('ip2') ip2: ElementRef;

  constructor(private rule: RuleDesignService, private data_int: DatainterchangeService) {}

  ngOnInit() {
  }

  async addFilter(event: any) {

    let condition: Condition;
    let clause_temp: Clause[] = [];

    if(this.op2=='' || this.op2==undefined) {
      clause_temp.push(new Clause(this.op1, this.ip1.nativeElement.value));      
    } else {

      clause_temp.push(new Clause(this.op1, this.ip1.nativeElement.value));
      clause_temp.push(new Clause(this.op2, this.ip2.nativeElement.value));
    }

    if(this.radio==null || this.radio==undefined) {
      this.radio = 'none';
    }
    condition = new Condition(this.element, this.radio, clause_temp);
    this.condition_list.push(condition);
    
    this.element = 'None'; this.op1 = 'None';
    this.ip1.nativeElement.value = '';
    this.radio = 'None';
    this.action.nativeElement.value = '';
    this.op2 = 'None'; this.ip2.nativeElement.value = '';  
  }

  getAsyncPromise(data: any) {

    const hasError:any = false;

    let promise = new Promise((resolve, reject) => {
      
      this.rule.createRule(data).subscribe(val => {

        if(hasError) {
          reject();
        } else {
          resolve(val);
        }
      });
    });

    return promise;
  }

  async createRule(event: any) {

    let rhs = new RHS(this.action.nativeElement.value);
    let lhs = new LHS(this.table, this.type, this.condition_list);
    let rule = new Rules(lhs, rhs);
    let rule_list = new RuleList(rule);
    this.condition_list = [];

    console.log(rule);

    this.message = await this.getAsyncPromise(rule)
    
    if(this.message==true) {
      alert('Rule Successfully Added to the XML Document.');
    } else {
      alert('There was some issue updating the Rule Based XML Doc. Please try again after sometime or try contacting the administrator.');
    }  
  }

}