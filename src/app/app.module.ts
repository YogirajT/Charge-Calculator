import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ProductsComponent } from './products/products.component';
import { GstrComponent } from './gstr/gstr.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodLicenseComponent } from './food-license/food-license.component';
import { FoodLicenseStateComponent } from './food-license-state/food-license-state.component';
import { GumastaComponent } from './gumasta/gumasta.component';
import { MsmeComponent } from './msme/msme.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { CiComponent } from './ci/ci.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ProductsComponent,
    GstrComponent,
    FoodLicenseComponent,
    FoodLicenseStateComponent,
    GumastaComponent,
    MsmeComponent,
    TrademarkComponent,
    CiComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
