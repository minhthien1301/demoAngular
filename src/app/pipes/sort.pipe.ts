import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(products: any[], sortBy: string, sortValue: number): any {
    if (sortBy === 'asc') {
      products = orderBy(products, ['name'], ['asc']);
    }
    return products;
  }
}
