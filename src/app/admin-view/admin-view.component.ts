import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RuleDesignService } from '../services/ruledesign.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  @ViewChild('acc_no') acc_number: ElementRef;
  constructor(private rule: RuleDesignService, private router: Router) { }

  ngOnInit() {
  }

  getAccount(event: any) {
    
    if(this.acc_number.nativeElement.value.length == 11) {
      this.rule.setAccNumber(this.acc_number.nativeElement.value);
      this.router.navigate(['login-portal/admin-view/account-details']);
    } else {
      alert('Incorrect Account Number Entered.');
    }

  }

  createUser(event: any) {

    this.router.navigate(['login-portal/admin-view/create-user']);
  }
}
