// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from './card-template';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cart: Card[] = []
  
  private foodSubject = new BehaviorSubject<Card[]>([]);
  foods$ = this.foodSubject.asObservable();

  constructor() { }

  addFood(food: Card) {
    const currentFoods = [...this.foodSubject.value];
    currentFoods.push(food);
    this.foodSubject.next(currentFoods);
  }

  // Throw Error
updateFoods(cart: Card[]) {
   this.foodSubject.next(cart);
    
  }
  
}
