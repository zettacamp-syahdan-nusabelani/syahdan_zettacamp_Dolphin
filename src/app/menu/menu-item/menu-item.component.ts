// menu-item.component.ts

import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Card } from 'src/app/shared/card-template';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  cart: Card[] = []
  foodItem: Card = { name: '', description: '', quantity: 0 }; // Initialize foodItem as a Card object

  constructor(private sharedService: SharedService) { }

  addFood() {
    // Check if both name and description are not empty
    if (this.foodItem.name.trim() !== '' && this.foodItem.description.trim() !== '') {
      this.sharedService.addFood(this.foodItem);
      this.foodItem = { name: '', description: '', quantity: 0 }; // Reset foodItem
    }
  }

 
}
