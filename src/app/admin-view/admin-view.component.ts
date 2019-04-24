import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RuleDesignService } from '../services/ruledesign.service';
import { RouterModule, Router } from '@angular/router';
import { DatainterchangeService } from '../services/datainterchange.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  @ViewChild('acc_no') acc_number: ElementRef;
  constructor(private rule: RuleDesignService, private router: Router, private data: DatainterchangeService) { }

  ngOnInit() {
  }

  async getAccount(event: any) {
    
      this.rule.setAccNumber(this.acc_number.nativeElement.value);

      let message = await this.getAsync(this.acc_number.nativeElement.value);

      if(message != null) {

        this.data.setData(message);
        this.router.navigate(['login-portal/admin-view/account-details']);
      } else {
        alert('There was some issue fetching account details. Please try again after some time. ');
      }
     
  }

  getAsync(data: any) {

    const hasError: boolean = false;

    let promise = new Promise((resolve, reject) => {
      this.rule.getAccount(data).subscribe(val => {

        if(hasError) {
          reject();
        } else {
          resolve(val);
        }
      })
    })
    return promise;
  }

  createUser(event: any) {

    this.router.navigate(['login-portal/admin-view/create-user']);
  }
}
