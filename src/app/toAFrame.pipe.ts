import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAFrame',
})
export class toAFrame implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value && typeof value === 'object') {
      console.log("beentje 1: " + value.z.toString());
      return { toString: () => '0 0 ' + value.z };
    }
    console.log("beentje 2");

    return value;
  }
}
