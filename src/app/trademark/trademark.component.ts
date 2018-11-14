import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrademarkService } from '../services/trademark.service';
import { Trademark } from './trademark';
import { HttpParams } from '@angular/common/http';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css']
})
export class TrademarkComponent implements OnInit {

  quote: number;
  type: string;
  options = [
    {'val': '', 'text': 'Select'},
    {'val': 'Manufacturing', 'text': 'Manufacturing Only'},
    {'val': 'Services', 'text': 'Services Only'},
    {'val': 'Both', 'text': 'Manufacturing and Services'},
  ];
  manArr = [];
  serviceArr = [];

  product: any;
  @Output() item = new EventEmitter<CartItem>();

  model = new Trademark();

  submitted = false;

  constructor(private trademarkService: TrademarkService) { }

  ngOnInit(): void {
    for (const opt in this.model.trademark.manufacturingBusiness) {
      if (opt) {
        this.manArr.push(opt);
      }
    }
    for (const opt in this.model.trademark.servicesBusiness) {
      if (opt) {
        this.serviceArr.push(opt);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    const httpParams = new HttpParams().set('json', JSON.stringify(this.model));
    this.trademarkService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  get status() {
    let status = false;
    for (const opt in this.model.trademark.manufacturingBusiness) {
      if (this.model.trademark.manufacturingBusiness[opt]) {
        status = true;
      }
    }
    for (const opt in this.model.trademark.servicesBusiness) {
      if (this.model.trademark.servicesBusiness[opt]) {
        status = true;
      }
    }
    return status;
  }

  newTrademark() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'Trademark',
        this.product['govCharges'],
        this.product['baseCharges'],
        this.product['gstCharges'],
        this.model));
      this.model = new Trademark();
      this.quote = null;
    }
  }

}
