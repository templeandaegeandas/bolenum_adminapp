
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {

    transform(value: any[], args: string): any {

        args = args.toLowerCase() || args.toUpperCase();

        if (!args[0]) {

            return value;

        }

        return value.filter((item) => {

            return item.pairName.toLowerCase().includes(args)
                || item.pairName.toUpperCase().includes(args)
                || item.toCurrency[0].currencyName.toLowerCase().includes(args)
                || item.toCurrency[0].currencyName.toUpperCase().includes(args)
                || item.pairedCurrency[0].currencyName.toLowerCase().includes(args)
                || item.pairedCurrency[0].currencyName.toUpperCase().includes(args);
        });
    }
}

