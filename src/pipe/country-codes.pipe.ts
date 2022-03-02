import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCodes',
})
export class CountryCodesPipe implements PipeTransform {
  transform(value: string, code?: string): string {
    if (code == 'USA') return `+1${value}`;
    return `+88${value}`;
  }
}
