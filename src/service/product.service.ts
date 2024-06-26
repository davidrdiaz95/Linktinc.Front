import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Response } from '../model/response.model';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SaleProduct } from '../model/sale_product.model';
import { CreateProduct } from '../model/create_product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Response<CreateProduct[]>> {
    return this.http.get<Response<CreateProduct[]>>(environment.urlProduct+"Product");
  }

  createProduct(product : Product, token : string): Observable<Response<number>> {
    let headers = new HttpHeaders().append(
        'Content-Type',
        'application/json'
    ).append(
      'Authorization',
      'Bearer '+ token
    );
    return this.http.post<Response<number>>(environment.urlProduct+"ProductSale",product,{
        headers: headers
    });
  }

  updateProduct(product : CreateProduct, token : string): Observable<Response<number>> {
    let headers = new HttpHeaders().append(
        'Content-Type',
        'application/json'
    ).append(
      'Authorization',
      'Bearer '+ token
    );
    return this.http.put<Response<number>>(environment.urlProduct+"ProductSale",{
        Id : product.id,
        Price : product.price,
        Amount: product.amount
      },{
        headers: headers
    });
  }

  saleProduct(saleProduct : SaleProduct[], price : number): Observable<Response<number>> {
    let headers = new HttpHeaders().append(
        'Content-Type',
        'application/json'
    );
    return this.http.post<Response<number>>(environment.urlProduct+"Invoice",{
        InvoiceProduct : saleProduct,
        Price : price
      },{
        headers: headers
    });
  }
}
