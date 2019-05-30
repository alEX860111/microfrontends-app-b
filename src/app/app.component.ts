import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-b',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  products: Product[] = [
    { id: 1, name: 'iphone', price: 799, description: 'iPhone is a line of smartphones designed and marketed by Apple Inc. All generations of the iPhone use Apples iOS mobile operating system software.' },
    { id: 2, name: 'razr', price: 459, description: 'The Motorola Razr was a series of mobile phones by Motorola, part of the 4LTR line. The V3 was the first phone released in the series and was introduced in...'},
    { id: 3, name: 's9', price: 699, description: 'The Samsung Galaxy S9 and Samsung Galaxy S9+ are Android smartphones produced by Samsung Electronics as part of the Samsung Galaxy S series.'}
  ];

  product: Product;

  @Input()
  set productId(productId: number) {
    this.product = this.products.find(product => product.id == productId);
  }

}
