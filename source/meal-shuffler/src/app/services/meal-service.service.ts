import { IMeal } from './../modals/meal';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private firestore: AngularFirestore) { }


  getMasterMeals() {
    return this.firestore.collection('master-meals').snapshotChanges();
  }

  addMasterMeal(payload: IMeal) {
    return this.firestore.collection('master-meals').add(payload);
  }

  updateMasterMeal(mealId: string, payload: IMeal) {
    return this.firestore.doc('master-meals/' + mealId).update(payload);
  }

  deleteMasterMeal(mealId: string) {
    return this.firestore.doc('master-meals/' + mealId).delete();
  }

  getRandomMeals(meals:IMeal[], k: number) : IMeal[]{
    if(meals.length < k){
      k = meals.length;
    }
    const randomSampling = this.selectKItems(meals,meals.length,k)
    return randomSampling;
  }

   selectKItems(stream:IMeal[], n:number, k:number) : IMeal[]
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
