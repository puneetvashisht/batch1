import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(input: string, exponents?: any): string {
		  return input.split("").reverse().join("");
  }
}
