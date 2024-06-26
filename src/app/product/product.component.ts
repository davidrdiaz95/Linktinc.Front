import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { CreateProduct } from '../../model/create_product.model';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  
  constructor(private productServiceService : ProductService,
    private alertService : AlertService
  ){}

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
    let productShop = this.productSale.filter(x=> x.id == product.id) ;
    if(productShop.length >0){
      product.amount_sale = product.amount_sale +1;
    }
    else{
      if(product.amount_sale == undefined)
        product.amount_sale = 1;
      else
      product.amount_sale = product.amount_sale +1;

      this.productSale.push(product)  
    }
      
  }

  remove(product: CreateProduct): void {
    if(product.amount_sale <= 1){
      this.productSale =  this.productSale.filter(x=> x !=  product)
      product.amount_sale = 0;
    }
    else
      if(product.amount_sale == undefined)
        product.amount_sale = 0;
      else
        product.amount_sale = product.amount_sale -1; 
    
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
        {
          this.alertService.showAlert("Se realizo la compra exitosamente");
          this.productSale = [];
          this.getProducts();
        }
        else{
          this.alertService.showAlertDanger("No se pudo realizar la compra")
        }
      });
  }
}
