import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { Meals } from '../models/meals.model';
import { Observable, catchError, switchMap, tap } from 'rxjs';
import { MealsService } from '../service/meals.service';

export interface MealState {
  meals: Meals | null;
}

export const initialMealState: MealState = {
  meals: null,
};

@Injectable()
export class MealStore extends ComponentStore<MealState> {
  readonly meals$: Observable<Meals | null> = this.select(
    (state) => state.meals
  );

  readonly searchMeals$ = this.effect((data$: Observable<string>) =>
    data$.pipe(
      switchMap((search) =>
        this.mealsService.getMealsSearch(search).pipe(
          tapResponse(
            (meals) => this.setMeals(meals),
            (error) => console.error('Error fetching meals', error)
          )
        )
      )
    )
  );

  private readonly setMeals = this.updater((state, meals: Meals) => ({
    ...state,
    meals: meals,
  }));

  constructor(private readonly mealsService: MealsService) {
    super(initialMealState);
  }
}
