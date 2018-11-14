import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gstr } from './gstr';
import { GstrService } from '../services/gstr.service';
import { HttpParams } from '@angular/common/http';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-gstr',
  templateUrl: './gstr.component.html',
  styleUrls: ['./gstr.component.css']
})
export class GstrComponent implements OnInit {
  quote: number;

  product: any;
  @Output() item = new EventEmitter<CartItem>();

  submitted = false;

  model = new Gstr(0);

  constructor(private gstrService: GstrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    const httpParams = new HttpParams().set('json', JSON.stringify(this.model));
    this.gstrService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  newGstr() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'GST',
        0,
        this.product['payable'],
        0,
        this.model));
      this.model = new Gstr(0);
      this.quote = null;
    }
  }

}
