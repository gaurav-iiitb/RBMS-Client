import { Injectable } from "@angular/core";
import { Condition } from './Condition';

@Injectable()
export class LHS 
{
    private table: string;
    private type: string;
    private conditionList: Condition[] = new Array();

    //private List<Condition> conditionList  = new ArrayList<Condition>();
    
    constructor(table: string, type: string, conditionList: Condition[]) 
    {
        this.table = table;
        this.type = type;
        this.conditionList = conditionList;
    }

}