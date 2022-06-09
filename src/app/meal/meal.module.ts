import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MealService } from './meal.service';
import { MEAL_ROUTES } from './meal.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MEAL_ROUTES)
  ],
  declarations: [
    MealListComponent,
    MealEditComponent
  ],
  providers: [MealService],
  exports: []
})
export class MealModule { }
