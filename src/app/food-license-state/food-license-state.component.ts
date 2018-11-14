import { Component, Output, EventEmitter } from '@angular/core';
import { FlState } from './fl-state';
import { HttpParams } from '@angular/common/http';
import { FlStateService } from '../services/fl-state.service';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-food-license-state',
  templateUrl: './food-license-state.component.html',
  styleUrls: ['./food-license-state.component.css']
})
export class FoodLicenseStateComponent {
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

  stateOpt = [
    {'val': '', 'text': 'Select'},
    {'val': 'AN', 'text': 'Andaman &amp; Nicobar Islands'},
    {'val': 'AP', 'text' : 'Andhra Pradesh'},
    {'val': 'AR', 'text' : 'Arunachal Pradesh'},
    {'val': 'AS', 'text' : 'Assam'},
    {'val': 'BI', 'text' : 'Bihar'},
    {'val': 'CH', 'text' : 'Chandigarh'},
    {'val': 'CG', 'text' : 'Chhattisgarh'},
    {'val': 'DN', 'text' : 'Dadra &amp; Nagar Haveli'},
    {'val': 'DD', 'text' : 'Daman &amp; Diu'},
    {'val': 'DL', 'text' : 'Delhi'},
    {'val': 'GO', 'text' : 'Goa'},
    {'val': 'GJ', 'text' : 'Gujarat'},
    {'val': 'HA', 'text' : 'Haryana'},
    {'val': 'HI', 'text' : 'Himachal Pradesh'},
    {'val': 'JK', 'text' : 'Jammu &amp; Kashmir'},
    {'val': 'JH', 'text' : 'Jharkhand'},
    {'val': 'KA', 'text' : 'Karnataka'},
    {'val': 'KE', 'text' : 'Kerala'},
    {'val': 'LK', 'text' : 'Lakshadweep'},
    {'val': 'MP', 'text' : 'Madhya Pradesh'},
    {'val': 'MH', 'text' : 'Maharashtra'},
    {'val': 'MA', 'text' : 'Manipur'},
    {'val': 'ME', 'text' : 'Meghalaya'},
    {'val': 'MI', 'text' : 'Mizoram'},
    {'val': 'NG', 'text' : 'Nagaland'},
    {'val': 'OR', 'text' : 'Orissa'},
    {'val': 'PY', 'text' : 'Puducherry'},
    {'val': 'PJ', 'text' : 'Punjab'},
    {'val': 'RJ', 'text' : 'Rajasthan'},
    {'val': 'SI', 'text' : 'Sikkim'},
    {'val': 'TN', 'text' : 'Tamil Nadu'},
    {'val': 'TE', 'text' : 'Telangana'},
    {'val': 'TR', 'text' : 'Tripura'},
    {'val': 'UP', 'text' : 'Uttar Pradesh'},
    {'val': 'UT', 'text' : 'Uttarakhand'},
    {'val': 'WB', 'text' : 'West Bengal'},
  ];

  public optState;

  submitted = false;

  model = new FlState();

  constructor(private flBasicService: FlStateService) { }

  onSubmit() {
    this.submitted = true;
    const httpParams = new HttpParams().set('json', JSON.stringify(this.model))
    .set('years', this.model.payment.validity)
    .set('paymentType', 'full');
    this.flBasicService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  newFlState() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'Food License State',
        this.product['governmentCharges'],
        this.product['serviceCharges'],
        this.product['gstCharges'],
        this.model));
        this.model = new FlState();
        this.quote = null;
        this.submitted = false;
    }
  }
}
