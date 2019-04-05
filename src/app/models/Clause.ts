import { Injectable } from '@angular/core';

@Injectable()
export class Clause 
{
    private operation: string;
    private value: string;
    
    getOperation() 
    {
        return this.operation;
    }
    
    setOperation(operation: string) 
    {
        this.operation = operation;
    }
    
    getValue() 
    {
        return this.value;
    }
    setValue(value: string) 
    {
        this.value = value;
    }
    
    
    constructor(operation: string, value: string) 
    {
        this.operation = operation;
        this.value = value;
    }
    
}