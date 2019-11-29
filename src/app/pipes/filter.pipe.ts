import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], name: string): any {
    if (!name) {
      return products;
    } else {
      if (name) {
        products = products.filter(x => {
          return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        });
      }
    }
    return products;
  }
}
