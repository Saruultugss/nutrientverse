import { Routes } from '@angular/router';
import { NutrientListComponent } from './nutrient-list/nutrient-list.component';
import { NutrientEditComponent } from './nutrient-edit/nutrient-edit.component';

export const NUTRIENT_ROUTES: Routes = [
  {
    path: 'nutrients',
    component: NutrientListComponent
  },
  {
    path: 'nutrients/:id',
    component: NutrientEditComponent
  }
];
