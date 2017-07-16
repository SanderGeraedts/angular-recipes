import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe("Nasi Goreng", "This is simply a test", "http://img.taste.com.au/8ctlZIxw/taste/2016/11/nasi-goreng-353-1.jpeg"),
      new Recipe("Nasi Goreng", "This is simply a test", "http://img.taste.com.au/8ctlZIxw/taste/2016/11/nasi-goreng-353-1.jpeg"),
      new Recipe("Nasi Goreng", "This is simply a test", "http://img.taste.com.au/8ctlZIxw/taste/2016/11/nasi-goreng-353-1.jpeg")
    ];
  }

  ngOnInit() {
  }

  onSelectRecipe( recipe: Recipe ) {
    this.recipeWasSelected.emit( recipe );
  }
}
