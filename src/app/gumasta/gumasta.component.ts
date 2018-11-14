import { Component, Output, EventEmitter } from '@angular/core';
import { Gumasta } from './gumasta';
import { HttpParams } from '@angular/common/http';
import { GumastaService } from '../services/gumasta.service';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-gumasta',
  templateUrl: './gumasta.component.html',
  styleUrls: ['./gumasta.component.css']
})
export class GumastaComponent {
  quote: number;
  districtOpt: String[];
  options = [
    '',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];

  stateOpt = [
    {'val': 'MAHARASHTRA', 'text' : 'Maharashtra'},
  ];

  product: any;
  @Output() item = new EventEmitter<CartItem>();

  public optState;

  submitted = false;

  model = new Gumasta();

  constructor(private gumastaService: GumastaService) { }

  onSubmit() {
    this.submitted = true;
    const httpParams = new HttpParams().set('json', JSON.stringify(this.model));
    this.gumastaService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  onChange(newValue) {
    this.gumastaService.getDistrict(newValue).subscribe((resp) => {
      this.districtOpt = Object.keys(resp).map(function(key) {
        return resp[key];
      });
    });
  }

  newGumasta() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'Gumasta',
        0,
        this.product['payableAmount'],
        0,
        this.model));
      this.model = new Gumasta();
      this.quote = null;
    }
  }

}
