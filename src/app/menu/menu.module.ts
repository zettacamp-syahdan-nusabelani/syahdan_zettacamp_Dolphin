//menu-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MenuItemComponent
  ]
})
export class MenuModule { }
