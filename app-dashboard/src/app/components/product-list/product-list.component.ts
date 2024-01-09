import { Component, Input } from '@angular/core';
import { ProductList } from '../../shared/interfaces/product';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input()
  productList: ProductList = []

}
