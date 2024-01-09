import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { noOnlyWhitespaceValidator } from '../../core/validators/whiteSpace';
import { ProductService } from '../../services/product/product.service';
import { ProductList, SearchProduct } from '../../shared/interfaces/product';
import { distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductListComponent, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  destroyRef = inject(DestroyRef);

  productService = inject(ProductService);

  productList = signal<ProductList>([]);

  searchControl = new FormControl('', [Validators.required, noOnlyWhitespaceValidator])

  ngOnInit(): void {
    this.loadProducts()

    this.searchControl.valueChanges.pipe(distinctUntilChanged()).subscribe(data => {
      if (String(data).length == 0 && this.productList().length == 0) {
        console.log('dasdas')
        this.loadProducts()
      }
    })
  }


  loadProducts() {

    this.productService.getProductList<ProductList>()
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
        this.productList.set(data)
      })

  }

  searchProduct() {
    if (this.searchControl.valid) {
      this.productService.searchProduct<SearchProduct>(String(this.searchControl.value))
        .pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {

          this.productList.set(result.data._productList);
        })
    }
  }
} 
