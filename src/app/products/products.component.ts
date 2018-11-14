import { Component } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  major = 1;
  minor = 23;
  flOptions = [
    'Select',
    'Less Than 12 Lakh',
    '12 Lakh to 20 Cr',
  ];

  cint = true;
  foodLicense = true;
  trademark = true;
  msme = true;
  gumasta = true;
  gstr = true;

  paramlist = ['cint', 'foodLicense', 'trademark', 'msme', 'gumasta', 'gstr'];

  closeAll: any;

  cart: any[] = [];

  public option;
  constructor() { }

  newMinor() {
    this.minor++;
  }

  removeall() {
    this.cart = [];
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  addItem(item: CartItem) {
    this.cart.push(item);
    this.closeAll = this.closeAll === false ? 0 : false;
    this.cint = true;
    this.foodLicense = true;
    this.trademark = true;
    this.msme = true;
    this.gumasta = true;
    this.gstr = true;
  }

  activate(param: string) {
    this[param] = !this[param];
    let i = 0;
    while (this.paramlist[i]) {
      if (this.paramlist[i] !== param) {
        this[this.paramlist[i]] = true;
      }
      i++;
    }
  }

  get totalGov(): number {
    return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.governmentCharge, 0 );
  }
  get totalService(): number {
    return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.serviceCharge, 0 );
  }
  get totalGst(): number {
    return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.gst, 0 );
  }
  get totalTotal(): any {
    return this.cart.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0 );
  }

}
