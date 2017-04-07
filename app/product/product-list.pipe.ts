import {PipeTransform, Pipe} from '@angular/core'
import {IProduct} from './product';

@
Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filterBy: string): IProduct[] {
        console.log('transforming');
        filterBy = filterBy ? filterBy.toLocaleString() : null;
        return filterBy ? value.filter((product: IProduct) => product.productName.indexof(filterBy) !== -1) : value;
        
    }
}