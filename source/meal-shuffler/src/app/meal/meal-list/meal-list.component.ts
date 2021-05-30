import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  meals: any[] = [
    {
      "name": "Biryani",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Karhai",
      "cookingTime":"45 minutes"
    },
    {
      "name": "Paye",
      "cookingTime":"80 minutes"
    },
    {
      "name": "Mong daal",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Nihari",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Haleem",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Mutton Korma",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Tandoori chicken",
      "cookingTime":"60 minutes"
    },
    {
      "name": "Alo Gosht",
      "cookingTime":"60 minutes"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
