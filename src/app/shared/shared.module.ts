//shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from '../cart/cart.module';
import { MenuModule } from '../menu/menu.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartModule,
    MenuModule
  ]
})
export class SharedModule { }
