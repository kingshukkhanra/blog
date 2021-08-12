import { Pipe, PipeTransform } from '@angular/core';
import { Blogers } from '../models/blogers';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Blogers[], filterstring: string): Blogers[] {
    if(value.length == 0 || !filterstring){
      return value;
    }
       return value.filter(item =>{
         if(item.category.toLowerCase() === filterstring || item.name.toLowerCase() === filterstring)
         
          return item;
         else
           return false;
       });
  }


}
