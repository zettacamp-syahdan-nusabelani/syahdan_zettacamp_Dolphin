// cart-item-component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Card } from 'src/app/shared/card-template'; // Adjust the import path as needed

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {
  cart: Card[] = [];
  
  public subscription: Subscription = new Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.subscription = this.sharedService.foods$.subscribe(foods => {
      this.cart = foods;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

increaseQuantity(index: number) {
    const currentFoods = [...this.cart];
    currentFoods[index].quantity += 1; // Increase quantity by 1
    this.sharedService.updateFoods(currentFoods); // Update the cart
  }

  decreaseQuantity(index: number) {
    const currentFoods = [...this.cart];
    if (currentFoods[index].quantity >= 1) {
      currentFoods[index].quantity -= 1; // Decrease quantity by 1, but keep it at least 1
      this.sharedService.updateFoods(currentFoods); // Update the cart
    }
  }
deleteFood(index: number) {
    const currentFoods = [...this.cart];
    currentFoods.splice(index, 1); // Remove the food item at the specified index
  this.sharedService.updateFoods(currentFoods); // Update the cart
  
  console.log(this.cart);
  


  }

}
