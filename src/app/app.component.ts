import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('productList') productList: ProductListComponent;

  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'มะม่วง',
        price: 60
      },
      {
        name: 'มะพร้าว',
        price: 80
      },
      {
        name: 'ส้มโอ',
        price: 100
      }

    ];
  }

}
