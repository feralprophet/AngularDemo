import {Component, OnInit} from '@angular/core'
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})


export class ProductListComponent implements OnInit {

 

    pageTitle: string = 'My List Bitch';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage:string;
    products: IProduct[];

    //private _productService;
    // constructor(productService: ProductService) {
    //     this._productService = productService;
    // }
    constructor(private _productService: ProductService) {
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //this.products = this._productService.getProducts();
        this._productService.getProducts().subscribe(products => this.products = products, errors => this.errorMessage = <any>errors);
    }

    onRatingClicked(message: string): void {
        console.log('ratings clicked');
        this.pageTitle = 'Product List: ' + message;
    }
}