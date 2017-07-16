import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
