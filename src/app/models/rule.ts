import { Injectable } from '@angular/core';

//Domain Models

@Injectable()
export class Rule {

    private table: string;
    private type: string;
    private element: string;
    private operation1: string;
    private value1: string;
    private radio: string;
    private operation2: string;
    private value2: string;
    private action: string;
    
    constructor(table: string, type: string, element: string, operation1: string, value1: string, radio: string,  operation2: string, value2: string, action: string) {

        this.table = table;
        this.type = type;
        this.element = element;
        this.operation1 = operation1;
        this.value1 = value1;
        this.radio = radio;
        this.operation2 = operation2;
        this.value2 = value2;
        this.action = action;
    }

}   
