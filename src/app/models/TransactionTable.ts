import { Injectable } from '@angular/core';

@Injectable()
export class TransactionTable 
{

	private Tx_Id: string;

	private Acc_No: string;
	private Branch_Code: string;
	private Cust_ID: string;
	
	private Tx_Type: string;
	private Tx_time: string;
	private Tx_desc: string;
	private Tx_amount: number;

	  constructor(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: number) {
				
				this.Tx_Id = a;
				this.Acc_No = b;
        this.Branch_Code = c;
				this.Cust_ID = d;
				
				this.Tx_Type = e;
				this.Tx_time = f;
				this.Tx_desc = g;
				this.Tx_amount = h;

    }

    getAcc_No() {
		return this.Acc_No;
	}
	setAcc_No(acc_No) {
		this.Acc_No = acc_No;
	}
	getBranch_Code() {
		return this.Branch_Code;
    }
    
	setBranch_Code(branch_Code) {
		this.Branch_Code = branch_Code;
    }
    
	getCust_ID() {
		return this.Cust_ID;
    }
    
	setCust_ID(cust_ID) {
		this.Cust_ID = cust_ID;
	}
    
    
}