import { Injectable } from '@angular/core';

@Injectable()
export class AccountTable 
{
	private acc_no: string;
	private branch_code: string;
	private cust_id: string;
	private acc_type: string;
	private acc_balance: string;
	private lasttransactiontime: string;
	private lastqrtrfeedeductdate: string;
	private transaction_count: string;
	private credit_score: string;
    
    constructor(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string) {
        this.acc_no = a;
        this.branch_code = b;
        this.cust_id = c;
        this.acc_type = d;
        this.acc_balance = e;
        this.lasttransactiontime = f;
        this.lastqrtrfeedeductdate = g;
        this.transaction_count = h;
        this.credit_score = i;
    }
    
}