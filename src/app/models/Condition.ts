import { Clause } from './Clause';
import { Injectable } from '@angular/core';

@Injectable()
export class Condition 
{
    private element: string;
    private conjunction: string;
    private clause: Clause[] = new Array();
     
    constructor(element: string, conjunction: string, clause: Clause[]) 
    {
        this.element = element;
        this.conjunction = conjunction;
        this.clause = clause;
    }

    setClause(clause: Clause) {
        this.clause.push(clause);
    }

    getClause() {
        return this.clause;
    }
    
}
