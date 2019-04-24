import { Component, OnInit } from '@angular/core';
import { DatainterchangeService } from '../services/datainterchange.service';
import { RuleDesignService } from '../services/ruledesign.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private data: RuleDesignService) { }

  ngOnInit() {
  }

  async getTransactions(event: any) {
    
    let message = await this.getAsync()

    if(message != null) {

    } else {
      alert('Error Fetching Data. Please try again after some time.');
    }

  }

  getAsync() {

    const hasError: boolean = false;

    let promise = new Promise((resolve, reject) => {

      this.data.getTransactions('hello').subscribe(val => {

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
