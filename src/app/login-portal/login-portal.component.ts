import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/take'; 
import { RuleDesignService } from '../services/ruledesign.service';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  @ViewChild('medName') medUsername: ElementRef;
  @ViewChild('medPass') medPassword: ElementRef;
  
  public flag: any = 0;
  response: any;
  response_string: String;

  constructor(private router: Router, private rule: RuleDesignService) { }

  ngOnInit() {
  
  }

  //Aids the UI/UX for the login cred window
  focusFunction(event: any) {

    if(this.medUsername.nativeElement.value == '') {
      var element = document.getElementById("cred_user");
      element.classList.remove("transition");
    } else {
        var element = document.getElementById("cred_user");
        element.classList.add("transition"); 
    }

    if(this.medPassword.nativeElement.value == '') {
      var element1 = document.getElementById("cred_pass");
      element1.classList.remove("transition");
    } else {
        var element1 = document.getElementById("cred_pass");
        element1.classList.add("transition");
    }
  }

  //When Clicked on Rule Designer
  async ruleDesigner(event: any) { 

    this.router.navigate(['login-portal/rule-design']);
    /*
    if(this.medUsername.nativeElement.value=='admin' && this.medPassword.nativeElement.value=='admin') {

      let message = await this.AsyncResponse()
      console.log(message)
      if(message==true) {
        this.router.navigate(['login-portal/rule-design']);
      } else {
        alert('There was some issue. Please try again after some time.');
      }
    }
      
    else
      alert('Incorrect Credentials.');  */
  } 


  //Handles Async promises during Init
  AsyncResponse() {

    const hasError:any = false;
    let promise = new Promise((resolve, reject) => {
      
      this.rule.initialize().subscribe(val => {

        if(hasError) {
          reject();
        } else {
          resolve(val);
        }
      });
    });

    return promise;
  }

  //When clicked on Rule Administrator
  async ruleAdmin(event: any) {
    console.log('Rule Admin');

    if(this.medUsername.nativeElement.value=='admin' && this.medPassword.nativeElement.value=='admin')
      this.router.navigate(['login-portal/admin-view']);
    else
      alert('Incorrect Credentials.');
  }

  //When clicked on Rule Administrator
  async userLogin(event: any) {
    console.log('User Login');
    if(this.medUsername.nativeElement.value=='user' && this.medPassword.nativeElement.value=='user') {
      this.router.navigate(['login-portal/account-details']);
    } else {
      alert('Incorrect Credentials.');
    }
  }

  //When clicked on Reset Password
  resetPassword(event: any) {
    alert('The updated password will be mailed to your registered email address in some due time, please wait until then. Thank you for your patience.');
  }

}