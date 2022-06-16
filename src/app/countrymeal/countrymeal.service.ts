import { CountryMeal } from './countrymeal';
import { CountryMealFilter } from './countrymeal-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CountryMealService {
  countrymealList: CountryMeal[] = [];
  api = 'http://localhost/php-crud-api/api.php/records/country_meal';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<CountryMeal> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<CountryMeal>(url, {params, headers});
  }

  load(filter: CountryMealFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.countrymealList = result.records;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: CountryMealFilter): Observable<any> {
    const params = {
    };

    return this.http.get<any>(this.api, {params, headers});
  }

  save(entity: CountryMeal): Observable<CountryMeal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<CountryMeal>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<CountryMeal>(url, entity, {headers, params});
    }
  }

  delete(entity: CountryMeal): Observable<CountryMeal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<CountryMeal>(url, {headers, params});
    }
    return EMPTY;
  }
}

