import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textslice'
})

export class TextSlicePipe implements PipeTransform {
    constructor(){}
    transform(value: string, args: any[]): any {

      return  value = value.substring(0,15)+'...';
    }
}