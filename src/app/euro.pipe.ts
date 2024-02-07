import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro',
  standalone: true
})
export class EuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const euro = value + ' €';   
    return euro;         
  }

}
