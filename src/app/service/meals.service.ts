import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from '../models/meals.model';

@Injectable()
export class MealsService {
  constructor(protected httpClient: HttpClient) {}

  getMealsSearch(search: string): Observable<Meals> {
    return this.httpClient.get<Meals>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
  }
}
