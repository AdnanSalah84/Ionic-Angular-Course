import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';
import { Recipes } from './recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipes[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
