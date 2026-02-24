import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  filterIsOn: boolean = false;

  displayedProducts: Product[] = [];
  filteredProducts: Product[] = [];
  ngOnChanges(): void {
    this.displayedProducts = [...this.products];
  }

  showFiveStars(): void {
    if (this.filterIsOn) {
      this.filterIsOn = false;
      this.displayedProducts = this.filteredProducts;
      this.filteredProducts = this.displayedProducts;
    } else {
      this.filterIsOn = true
      this.filteredProducts = this.displayedProducts;
      this.displayedProducts = this.displayedProducts.filter(product => product.rating == 5);
    }

  }

  deleteProduct(productId: number): void {
    this.displayedProducts = this.displayedProducts.filter(p => p.id !== productId);
  }
}
