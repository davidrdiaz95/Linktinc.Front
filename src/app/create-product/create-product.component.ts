import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { LocalServiceService } from '../../service/local-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent implements OnInit {
  product!: IProduct;

  constructor(private productService : ProductService,
    private localServiceService : LocalServiceService
  ){}
  ngOnInit(): void {
    this.product = new Product();
  }
  create(): void {
    let token = this.localServiceService.getData("token")
    if(token != null)
      this.productService.createProduct(this.product,token).subscribe(
        x=> {
          if(x.data >0)
            window.location.reload();

        }
      )
  }

}
