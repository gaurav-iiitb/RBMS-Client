import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RuleDesignService } from '../services/ruledesign.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private acc_num: any;
  private acc_type: any;
  @ViewChild('fname') fname: ElementRef;
  @ViewChild('mname') mname: ElementRef;
  @ViewChild('lname') lname: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('add') add: ElementRef;
  @ViewChild('dob') dob: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('state') state: ElementRef;
  @ViewChild('pin') pin: ElementRef;
  @ViewChild('pan') pan: ElementRef;
  @ViewChild('aadhar') aadhar: ElementRef;
  @ViewChild('amt') amt: ElementRef;

  constructor(private rule: RuleDesignService) { }

  ngOnInit() {
    this.acc_num = this.randomNumberGenerator();
  }

  async createUser(event: any) {

    let data = this.generateJSON();
    let message = await this.getAsyncPromise(data)
    
    if(message==true) {

      this.resetAll();
      alert('Account Successfully Created.');
    } else {
      alert('There was some issue creating user. Please try again after sometime or try contacting the administrator.');
    }
    
  }

  randomNumberGenerator() {
    var text = "";
    var possible = "0123456789";
  
    for (var i = 0; i < 11; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  resetAll() {

    this.fname.nativeElement.value = '';
    this.mname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.phone.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.add.nativeElement.value = '';
    this.aadhar.nativeElement.value = '';
    this.pan.nativeElement.value = '';
    this.pin.nativeElement.value = '';
    this.city.nativeElement.value = '';
    this.state.nativeElement.value = '';
    this.dob.nativeElement.value = '';
    this.amt.nativeElement.value = '';

    this.acc_type = 'None';
    this.acc_num = this.randomNumberGenerator();
  }

  generateJSON() {
    let data = {
      fname: this.fname.nativeElement.value,
      mname: this.mname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      phone: this.phone.nativeElement.value,
      email: this.email.nativeElement.value,
      dob: this.dob.nativeElement.value,
      add: this.add.nativeElement.value,
      city: this.city.nativeElement.value,
      state: this.state.nativeElement.value,
      pin: this.pin.nativeElement.value,
      pan: this.pan.nativeElement.value,
      aadhar: this.aadhar.nativeElement.value,
      amt: this.amt.nativeElement.value,
      acc_type: this.acc_type,
      acc_num: this.acc_num
    }

    return data;
  }


  getAsyncPromise(data: any) {

    const hasError:any = false;

    let promise = new Promise((resolve, reject) => {
      
      this.rule.createUser(data).subscribe(val => {

        if(hasError) {
          reject();
        } else {
          resolve(val);
        }
      });
    });

    return promise;
  }

  
}
