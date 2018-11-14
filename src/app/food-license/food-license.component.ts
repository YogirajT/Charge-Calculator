import { Component, EventEmitter, Output } from '@angular/core';
import { FlBasic } from './fl-basic';
import { FlBasicService } from '../services/fl-basic.service';
import { HttpParams } from '@angular/common/http';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-food-license',
  templateUrl: './food-license.component.html',
  styleUrls: ['./food-license.component.css']
})
export class FoodLicenseComponent {
  quote: number;
  options = [
    '',
    '1',
    '2',
    '3',
    '4',
    '5',
  ];

  product: any;
  @Output() item = new EventEmitter<CartItem>();

  submitted = false;

  model = new FlBasic('');

  constructor(private flBasicService: FlBasicService) { }

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
    const httpParams = new HttpParams().set('years', this.model.business.duration);
    this.flBasicService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  newFlBasic() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'Food License Basic',
        0,
        this.product['payable'],
        0,
        this.model));
      this.model = new FlBasic('');
      this.quote = null;
    }
  }
}
