import { Component, OnInit } from '@angular/core';
import { IMeal } from 'src/app/modals/meal';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-master-meal-list',
  templateUrl: './master-meal-list.component.html',
  styleUrls: ['./master-meal-list.component.scss']
})
export class MasterMealListComponent implements OnInit {
  public meals: IMeal[] = [];
  constructor(private mealService: MealService) { }


  ngOnInit(): void {
     this.getMeals();
  }

  // getMeals(): void {
  //   this.mealService.getMasterMeals()
  //     .subscribe(meals => this.meals = meals);
  // }

  getMeals(): void {
    this.mealService.getMasterMeals().subscribe((res) => {
      this.meals = res.map((meal) => {
        return {
          ...(meal.payload.doc.data() as IMeal),
          id: meal.payload.doc.id
        } as IMeal;
      });
    });
  }

  addMeal(newMeal: string): void {
    if (newMeal) {
      if (this.meals.find(x => x.name.trim() == newMeal.trim()) == undefined) {
        this.mealService.addMasterMeal({ name: newMeal, isshared:false });
      }
    }
  }

}
