import { ProductItemComponent } from './../product-item/product-item.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @ViewChildren(ProductItemComponent) productItems: QueryList<ProductItemComponent>;

    products: Product[];
    constructor() {
        this.products = [];
    }

    ngOnInit(): void {
    }
    selectedProduct(productComponent: ProductItemComponent) {
        alert(productComponent.product.name);
        this.productItems.forEach(p => {
            p.isSelected = false;
        });
        productComponent.isSelected = true;
    }
}
