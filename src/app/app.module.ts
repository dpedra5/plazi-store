import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './modules/product/product.component';
import { CartComponent } from './modules/cart/cart.component';
import { ProductsComponent } from './modules/products/products.component';
import { ContactComponent } from './modules/contact/contact.component';
import { DemoComponent } from './modules/demo/demo.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SharedModule} from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
