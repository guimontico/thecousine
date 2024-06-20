import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideComponentStore } from '@ngrx/component-store';
import { MealStore } from '../state/meal.store';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ReactiveFormsModule, FormsModule],
  providers: [provideComponentStore(MealStore)],
})
export class HomeComponent implements OnInit {
  search = new FormControl();

  private readonly mealStore = inject(MealStore);

  ngOnInit() {}

  searchMeal() {
    this.mealStore.searchMeals$(this.search.value);
  }
}
