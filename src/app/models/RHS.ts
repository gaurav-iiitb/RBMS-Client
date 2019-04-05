import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
export class RHS 
{
    private action: string;
    
    constructor(action: string) {
        this.action = action;
    }   
}