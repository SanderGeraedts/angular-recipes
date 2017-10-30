import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/list/list.component';
import { ShoppingListEditComponent } from './shopping/list/edit/edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/list/list.component';
import { RecipeListItemComponent } from './recipe/list/item/item.component';
import { RecipeDetailComponent } from './recipe/detail/detail.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
