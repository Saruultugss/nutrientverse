import { Country } from './country';
import { CountryFilter } from './country-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CountryService {
  countryList: Country[] = [];
  api = 'http://localhost/php-crud-api/api.php/records/country';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Country> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Country>(url, {params, headers});
  }

  load(filter: CountryFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.countryList = result.records;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: CountryFilter): Observable<any> {
    const params = {
      'name': filter.name,
    };

    return this.http.get<any>(this.api, {params, headers});
  }

  save(entity: Country): Observable<Country> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Country>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Country>(url, entity, {headers, params});
    }
  }

  delete(entity: Country): Observable<Country> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Country>(url, {headers, params});
    }
    return EMPTY;
  }
}

