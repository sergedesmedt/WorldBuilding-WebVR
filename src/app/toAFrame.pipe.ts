import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toAFrame',
})
export class toAFrame implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value && typeof value === 'object') {
      console.log(
        'beentje 1: {x:' +
          value.x.toString() +
          ', y:' +
          value.y.toString() +
          ', z:' +
          value.z.toString() +
          '}'
      );
      return { toString: () => value.x + ' ' + value.y + ' ' + value.z };
    }
    console.log('beentje 2');

    return value;
  }
}
