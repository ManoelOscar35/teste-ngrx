import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encurtar'
})
export class EncurtarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 100) + '... ';
  }

}
