import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    // (12)34567-8900
    return `(${value.substring(0,2)})${value.substring(2,7)}-${value.substring(7,11)}`;
  }
}
