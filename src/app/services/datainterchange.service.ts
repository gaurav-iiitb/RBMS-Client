import { Injectable } from '@angular/core';
import { Clause } from '../models/Clause';
import { Condition } from '../models/Condition';
import { Rules } from '../models/Rules';

@Injectable({
  providedIn: 'root'
})
export class DatainterchangeService {

  private clause_list: Clause[] = [];
  private condition_list: Condition[] = [];
  private rule_list: Rules[] = [];
  
  constructor() { }


  getClauseList() {
    return this.clause_list;
  }

  getConditionList() {
    return this.condition_list;
  }

  getRuleList() {
    return this.rule_list;
  }


  setClauseList(data: Clause) {
    this.clause_list.push(data);
  }

  setConditionList(data: Condition) {
    this.condition_list.push(data);
  }

  setRuleList(data: Rules) {
    this.rule_list.push(data);
  }

}
