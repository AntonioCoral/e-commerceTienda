// src/app/components/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';
import { ProductsService } from '../../services/producto..service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  category: Category[] = [];
  carrito = [];
  searchQuery: string = '';

  constructor(private router: Router, private categoryService: CategoryService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (category: Category[]) => {
        this.category = category;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  buscarProductos(searchQuery: string): void {
    if (searchQuery) {
      this.router.navigate(['/product-list'], { queryParams: { query: searchQuery.trim() } });
    }
  }

  filtrarPorCategoria(categoria: any): void {
    this.router.navigate(['/categorias', categoria.name]);
  }

  verCarrito(): void {
    this.router.navigate(['/cart']);
  }
}
