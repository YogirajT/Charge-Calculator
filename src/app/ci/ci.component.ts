import { Component, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { Ci } from './ci';
import { HttpParams } from '@angular/common/http';
import { CiService } from '../services/ci.service';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-ci',
  templateUrl: './ci.component.html',
  styleUrls: ['./ci.component.css']
})
export class CiComponent {
  quote: number;
  districtOpt: String[];

  product: any;
  @Output() item = new EventEmitter<CartItem>();
  // customConstruct: typeof CartItem.prototype.customConstruct;

  options = [
    {'val': '', 'text' : 'Select'},
    {'val': 'pvt', 'text' : 'Private Limited'},
    {'val': 'llp', 'text' : 'LLP'},
    {'val': 'opc', 'text' : '(OPC) Private limited'},
  ];

  public optState;

  submitted = false;

  model = new Ci();

  constructor(private ciService: CiService) { }

  onSubmit() {
    this.submitted = true;
    const httpParams = new HttpParams().set('type', this.model.type).set('partners', String(this.model.partners));
    this.ciService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  newCi() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'Company Incorporation',
        this.product['PROF_CHG'],
        this.product['serviceCharge'],
        this.product['gst'],
        this.model));
      this.model = new Ci();
      this.quote = null;
    }
  }


}
