import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];
  }

  ngOnInit() {
  }

  onIngredientAdded( ingredient: Ingredient ) {
    this.ingredients.push( ingredient );
  }
}
