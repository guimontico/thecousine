import { Component, OnInit } from '@angular/core';
import { MealStore } from '../../state/meal.store';
import { provideComponentStore } from '@ngrx/component-store';
import { Meals } from '../../models/meals.model';

@Component({
  selector: 'app-meal-list',
  template: `
    <li *ngFor="let meal of meals">
      {{ meal }}
    </li>
  `,
  providers: [provideComponentStore(MealStore)],
})
export class MealListComponent implements OnInit {
  meals: Meals | null = null;

  constructor(private readonly mealStore: MealStore) {}

  ngOnInit() {
    this.mealStore.meals$.subscribe((meals) => {
      this.meals = meals;
    });
  }
}
