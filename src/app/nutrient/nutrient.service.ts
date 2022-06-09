import { Nutrient } from './nutrient';
import { NutrientFilter } from './nutrient-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class NutrientService {
  nutrientList: Nutrient[] = [];
  api = 'http://localhost/php-crud-api/api.php/records/nutrient';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Nutrient> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Nutrient>(url, {params, headers});
  }

  load(filter: NutrientFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.nutrientList = result.records;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: NutrientFilter): Observable<any> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<any>(this.api, {params, headers});
  }

  save(entity: Nutrient): Observable<Nutrient> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Nutrient>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Nutrient>(url, entity, {headers, params});
    }
  }

  delete(entity: Nutrient): Observable<Nutrient> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Nutrient>(url, {headers, params});
    }
    return EMPTY;
  }
}

