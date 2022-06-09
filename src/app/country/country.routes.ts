import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryEditComponent } from './country-edit/country-edit.component';

export const COUNTRY_ROUTES: Routes = [
  {
    path: 'countries',
    component: CountryListComponent
  },
  {
    path: 'countries/:id',
    component: CountryEditComponent
  }
];
