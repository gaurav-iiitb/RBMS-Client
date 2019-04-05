import { Clause } from './Clause';
import { Injectable } from '@angular/core';

@Injectable()
export class Condition 
{
    private element: string;
    private conjunction: string;
    private clauseList: Clause[] = new Array();
     
    constructor(element: string, conjunction: string, clause: Clause[]) 
    {
        this.element = element;
        this.conjunction = conjunction;
        this.clauseList = clause;
    }

    setClause(clause: Clause) {
        this.clauseList.push(clause);
    }

    getClause() {
        return this.clauseList;
    }
    
}
