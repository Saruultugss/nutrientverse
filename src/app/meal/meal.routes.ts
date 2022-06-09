import { Routes } from '@angular/router';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';

export const MEAL_ROUTES: Routes = [
  {
    path: 'meals',
    component: MealListComponent
  },
  {
    path: 'meals/:id',
    component: MealEditComponent
  }
];
