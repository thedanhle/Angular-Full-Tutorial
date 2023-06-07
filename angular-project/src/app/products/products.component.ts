import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/AnalogWatch.jpg'},
    {id:1, name: 'Washing Machine', price: '109', color: 'Black', available: 'Available', image: '/assets/products/WashingMachine.jpg'},
    {id:1, name: 'iPhone 11', price: '109', color: 'Black', available: 'Available', image: '/assets/products/iPhone11.jpg'},
    {id:1, name: 'Nintendo Switch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/nintendoSwitch.jpg'},
    {id:1, name: 'Beats by Dre', price: '109', color: 'Black', available: 'Available', image: '/assets/products/beatsByDre.jpg'}
  ];
}
