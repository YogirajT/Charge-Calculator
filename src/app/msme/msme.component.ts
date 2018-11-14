import { Component, Output, EventEmitter } from '@angular/core';
import { Msme } from './msme';
import { HttpParams } from '@angular/common/http';
import { MsmeService } from '../services/msme.service';
import { CartItem } from '../products/cart-item';

@Component({
  selector: 'app-msme',
  templateUrl: './msme.component.html',
  styleUrls: ['./msme.component.css']
})
export class MsmeComponent {

  quote: number;

  model = new Msme();

  product: any;
  @Output() item = new EventEmitter<CartItem>();

  constructor(private msmeService: MsmeService) { }

  onSubmit() {
    const httpParams = new HttpParams().set('json', JSON.stringify(this.model));
    this.msmeService.getPricing(httpParams).subscribe((product) => {
      this.quote = product.quotation;
      this.product = product;
    });
  }

  newMsme() {
    if (this.quote > 0) {
      this.item.emit(new CartItem(
        'MSME',
        0,
        this.product['payableAmount'],
        0,
        this.model));
      this.model = new Msme();
      this.quote = null;
    }
  }

}
