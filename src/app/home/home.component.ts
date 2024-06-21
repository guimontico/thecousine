import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideComponentStore } from '@ngrx/component-store';
import { MealStore } from '../state/meal.store';
import { MealListComponent } from '../components/meal-list/meal-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ReactiveFormsModule, FormsModule, MealListComponent, AsyncPipe],
  providers: [provideComponentStore(MealStore)],
})
export class HomeComponent implements OnInit {
  search = new FormControl();

  private readonly mealStore = inject(MealStore);
  readonly mealList$ = this.mealStore.meals$;

  ngOnInit() {
    this.mealStore.meals$.subscribe((meals) => {
      console.log(meals);
    });
  }

  searchMeal() {
    this.mealStore.searchMeals$(this.search.value);
  }
}
