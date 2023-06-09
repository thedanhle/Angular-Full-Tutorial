import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productCountRadioButton: string = 'All';
  searchText: string = '';

  products = [
    {id:1, name: 'Analog Watch', price: '$109.99', color: 'Silver', available: 'Available', image: '/assets/products/AnalogWatch.jpg'},
    {id:1, name: 'LG Washing Machine', price: '$499.99', color: 'White', available: 'Not Available', image: '/assets/products/WashingMachine.jpg'},
    {id:1, name: 'iPhone 11', price: '$999.99', color: 'Silver', available: 'Available', image: '/assets/products/iPhone11.jpg'},
    {id:1, name: 'Nintendo Switch', price: '$349.99', color: 'Black', available: 'Not Available', image: '/assets/products/nintendoSwitch.jpg'},
    {id:1, name: 'Beats by Dre', price: '$99.99', color: 'Cream', available: 'Available', image: '/assets/products/beatsByDre.jpg'}
  ];

  getNumAllProducts(){
    return this.products.length;
  }

  getNumAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length;
  }

  getNumOutOfStockProducts(){
    return this.products.filter(product => product.available === "Not Available").length;
  }

  onFilterRadioButtonChanged(selected: string){
    this.productCountRadioButton = selected;
    // console.log(this.productCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

  existsInProducts(text: any){
    let exists = false;
    let product = text.toLowerCase();
    let input = this.searchText.toLowerCase();
    if(product.includes(input)){
      exists = true;
    }

    return exists;
  }
}
