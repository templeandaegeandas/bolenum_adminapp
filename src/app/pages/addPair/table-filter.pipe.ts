
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {

    transform(value: any[], args: string): any {

        if (!args[0]) {
            
            return value; 

        }
     
        return value.filter((item ) => {

            return item.pairName.includes(args) || item.toCurrency[0].currencyName.includes(args) ;
        });
     }
}

