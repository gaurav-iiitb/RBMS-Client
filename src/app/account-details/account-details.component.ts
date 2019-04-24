import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatainterchangeService } from '../services/datainterchange.service';
import { AccountTable } from '../models/AccountTable';
import { RuleDesignService } from '../services/ruledesign.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  private account: any;
  private flag: any;
  private acc_num: string;
  private cust_id: string;
  private type: string;
  private balance: string;
  private branch: string;
  private count: string;

  @ViewChild('value') value: ElementRef;

  constructor(private data: DatainterchangeService, private rule: RuleDesignService) { 
    
    this.account = this.data.getData();
    console.log(this.account);

    this.acc_num = this.account.acc_No;
    this.cust_id = this.account.cust_ID;
    this.type = this.account.acc_Type;
    this.branch = this.account.branch_Code;
    this.balance = this.account.acc_Balance;
    this.count = this.account.transaction_count;

  }

  ngOnInit() {

  }


  debit(event: any) {
    this.flag = 'debit';
  }

  credit(event: any) {
    this.flag = 'credit';
  }

  async transaction(event: any) {
    
    this.count = (Number(this.count) + 1).toString();
    if(this.flag=='debit') {
      this.balance = (Number(this.balance) - Number(this.value.nativeElement.value)).toString();
    } else {
      this.balance = (Number(this.balance) + Number(this.value.nativeElement.value)).toString();
    }

    let acc_data = new AccountTable(this.acc_num, this.branch, this.cust_id, this.type, this.balance,
       this.account.lastTransactionTime, this.account.lastQrtrFeeDeductDate, this.count, this.account.credit_score);

       console.log(acc_data);
    
    let message = await this.getAsync(acc_data);

    if(message == true) {
      alert('Transaction Completed.');
    } else {
      alert('Could Not Completed Transaction. Please tray again after some time.');
    }
  }

  getAsync(data: AccountTable) {

    const hasError: boolean = false;

    let promise = new Promise((resolve, reject) => {
      
      this.rule.updateTables(data).subscribe(val => {

        if(hasError) {
          reject();
        } else {
          resolve(val);
        }
      })
    })

    return promise;
  }

}