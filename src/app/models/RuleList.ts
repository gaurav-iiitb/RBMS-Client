import { Injectable } from "@angular/core";
import { Rules } from './Rules';

@Injectable()
export class RuleList 
{
    private listRules: Rules;

    constructor(listRules: any) {
        this.listRules = listRules;
    }
}
