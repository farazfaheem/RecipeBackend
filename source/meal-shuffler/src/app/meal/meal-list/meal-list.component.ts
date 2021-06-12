import { IMeal } from './../../modals/meal';
import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  public meals: IMeal[] = [];
  public randomMeals: IMeal[] = [];
  public shuffleNumber : number = 5;
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    if (this.meals.length == 0) {
      this.mealService.getMasterMeals().subscribe((res) => {
        this.meals = res.map((meal) => {
          return {
            ...(meal.payload.doc.data() as IMeal),
            id: meal.payload.doc.id
          } as IMeal;
        });
        this.shuffle();
      });
    }
  }

  shuffle():void{
     this.randomMeals = this.mealService.getRandomMeals(this.meals,this.shuffleNumber);
  }

  increment():void{
    this.shuffleNumber = this.shuffleNumber + 1;
  }

  decrement():void{
    if(this.shuffleNumber > 0){
      this.shuffleNumber = this.shuffleNumber - 1;
    }

  }

}
