import { Injectable } from '@angular/core';
import { Blogers } from '../models/blogers';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  public data:any;
  constructor() { }
  setValue(blog:Blogers){
    this.data = blog;
 }
 getValue(){
   return this.data;
 }
 
}
