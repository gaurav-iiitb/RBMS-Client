import { Injectable } from '@angular/core';

@Injectable()
export class Rules 
{
    
	private lhs: any;
	private rhs: any;
   
	constructor(lhs: any, rhs: any) 
    {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}