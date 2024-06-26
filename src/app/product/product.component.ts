import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { CreateProduct } from '../../model/create_product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  
  constructor(private productServiceService : ProductService){}

  products: CreateProduct[] = [];
  productSale: CreateProduct[] = [];
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productServiceService.getAllProduct().subscribe(
      prduct=> {
        this.products = prduct.data;
      }
    );
  }

  sale(product: CreateProduct): void {
    this.productSale.push(product)
  }

  saleProduct(): void {
    let product = this.productSale.map(x=> ({
      IdProduct : x.id,
      AmountProduct: x.amount_sale
    }))

    let amount = this.productSale.map(x=> x.amount_sale * x.price).reduce((acc, cur) => acc + Number(cur), 0);
    this.productServiceService.saleProduct(product,amount).subscribe(
      prduct=> {
        if(prduct.data >0)
          window.location.reload();
      });
  }
}
