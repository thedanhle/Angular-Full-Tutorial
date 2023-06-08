import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Analog Watch', price: '$109.99', color: 'Silver', available: 'Available', image: '/assets/products/AnalogWatch.jpg'},
    {id:1, name: 'LG Washing Machine', price: '$499.99', color: 'White', available: 'Not Available', image: '/assets/products/WashingMachine.jpg'},
    {id:1, name: 'iPhone 11', price: '$999.99', color: 'Silver', available: 'Available', image: '/assets/products/iPhone11.jpg'},
    {id:1, name: 'Nintendo Switch', price: '$349.99', color: 'Black', available: 'Not Available', image: '/assets/products/nintendoSwitch.jpg'},
    {id:1, name: 'Beats by Dre', price: '$99.99', color: 'Cream', available: 'Available', image: '/assets/products/beatsByDre.jpg'}
  ];
}
