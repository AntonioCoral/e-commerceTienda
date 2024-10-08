// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  services: any[] = [
    { title: 'Retiro en Tienda', image: 'retiroTienda.jpg' },
    { title: 'Entrega a Domicilio', image: 'retiroDomicilio.jpg' },
    { title: 'Resguardo', image: 'resguardo.jpg' },
    { title: 'Delivery', image: 'delivery.jpg' }
  ];

  categories: any[] = [
    { title: 'Abarrotes', image: 'abarrotes.jpg' },
    { title: 'Papelería', image: 'papeleria.jpg' },
    { title: 'Ferretería', image: 'ferreteria.png' },
    { title: 'Carnes Frías', image: 'carnes.jpg' },
    { title: 'Frutas y Verduras', image: 'frutas.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
