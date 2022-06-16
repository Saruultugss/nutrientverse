import { Routes } from '@angular/router';
import { CountryMealListComponent } from './countrymeal-list/countrymeal-list.component';
import { CountryMealEditComponent } from './countrymeal-edit/countrymeal-edit.component';

export const COUNTRYMEAL_ROUTES: Routes = [
  {
    path: 'countrymeals',
    component: CountryMealListComponent
  },
  {
    path: 'countrymeals/:id',
    component: CountryMealEditComponent
  }
];
