import { Meal } from './../../modals/meal';
import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  meals:Meal[] = [];
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getRandomMeals()
        .subscribe(meals => this.meals = meals);
  }

}
