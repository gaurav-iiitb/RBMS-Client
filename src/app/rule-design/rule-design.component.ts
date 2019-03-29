import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { promise } from 'protractor';
import { RuleDesignService } from './../services/ruledesign.service';

@Component({
  selector: 'app-rule-design',
  templateUrl: './rule-design.component.html',
  styleUrls: ['./rule-design.component.css']
})
export class RuleDesignComponent implements OnInit {

  private element: any;
  private operation: any;
  private value: any;
  @ViewChild('action') action: ElementRef;
  private type: any;
  private message: any;

  constructor(private rule: RuleDesignService) { }

  ngOnInit() {
  }

  async createRule(event: any) {

    var data = {
      type: this.type,
      element: this.element,
      operation: this.operation,
      value: this.value,
      action: this.action.nativeElement.value
    }

    this.message = await this.getAsyncPromise(data)
    console.log(this.message)
    if(this.message==true) {
      this.element = 'None'; this.operation = 'None';
      this.type = 'None'; this.value = 'None';
      this.action.nativeElement.value = 'None';
      alert('Rule Successfully Added to the XML Document.');
    } else {
      alert('There was some issue updating the Rule Based XML Doc. Please try again after sometime or try contacting the administrator.');
    }
    
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

}
