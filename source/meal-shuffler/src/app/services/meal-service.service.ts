import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEALS } from '../mock/mock-meals';
import { Meal } from '../modals/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }
  getMasterMeals(): Observable<Meal[]> {
    const masterMeals = of(MEALS);
    return masterMeals;
  }

  getRandomMeals() : Observable<Meal[]>{

    const randomSampling = of(this.selectKItems(MEALS,MEALS.length,5))
    return randomSampling;
  }

   selectKItems(stream:Meal[], n:number, k:number) : Meal[]
  {

    // Index for elements in stream[]
    let i;

    // reservoir[] is the output array. Initialize
    // it with first k elements from stream[]
    let reservoir = [];
    for(i = 0; i < k; i++)
      reservoir[i] = stream[i];

    // Use a different seed value so that
    // we don't get same result each time
    // we run this program

    // Iterate from the (k+1)th element
    // to nth element
    for(; i < n; i++)
    {
      // Pick a random index from 0 to i.
      let j = (Math.floor(Math.random() *
          100000000) % (i + 1));

      // If the randomly picked index is
      // smaller than k, then replace the
      // element present at the index
      // with new element from stream
      if (j < k)
        reservoir[j] = stream[i];
    }
    return reservoir;
}
}
