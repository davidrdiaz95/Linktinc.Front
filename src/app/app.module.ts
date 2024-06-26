import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
    imports: [BrowserModule,FormsModule, AppRoutingModule, HttpClientModule,FormsModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        LoginComponent,
        CreateProductComponent,
        UpdateProductComponent
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }