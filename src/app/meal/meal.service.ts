import { Meal } from './meal';
import { MealFilter } from './meal-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class MealService {
  mealList: Meal[] = [];
  api = 'http://localhost/php-crud-api/api.php/records/meal';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Meal> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Meal>(url, {params, headers});
  }

  load(filter: MealFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.mealList = result.records;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: MealFilter): Observable<any> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<any>(this.api, {params, headers});
  }

  save(entity: Meal): Observable<Meal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Meal>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Meal>(url, entity, {headers, params});
    }
  }

  delete(entity: Meal): Observable<Meal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Meal>(url, {headers, params});
    }
    return EMPTY;
  }
}

