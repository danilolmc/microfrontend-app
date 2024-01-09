import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_ENDPOINTS } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)
  private url = inject(API_ENDPOINTS)

  getProductList<T>() {
    return this.http.get<T>(this.url.products);
  }

  searchProduct<T>(productName: string) {
    return this.http.get<T>(`${this.url.products}/${productName}`);
  }
}
