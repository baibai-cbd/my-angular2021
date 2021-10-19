import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe1', 'shrimp taco', 'https://live.staticflickr.com/6155/6268151954_be4b584bbe_b.jpg'),
    new Recipe('a', 'b', 'c')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
