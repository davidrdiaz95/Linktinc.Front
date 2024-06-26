import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CreateProduct } from '../../model/create_product.model';
import { LocalServiceService } from '../../service/local-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  
  constructor(private productServiceService : ProductService,
    private localServiceService : LocalServiceService
  ){}

  products: CreateProduct[] = [];
  
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

  update(createProduct : CreateProduct): void {
    let token = this.localServiceService.getData("token")
    if(token != null)
      this.productServiceService.updateProduct(createProduct,token).subscribe(
        prduct=> {
          if(prduct.data >0)
            window.location.reload();
        });
  }
}
