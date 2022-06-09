import { Component, OnInit } from '@angular/core';
import { MealFilter } from '../meal-filter';
import { MealService } from '../meal.service';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: 'meal-list.component.html'
})
export class MealListComponent implements OnInit {

  filter = new MealFilter();
  selectedMeal!: Meal;
  feedback: any = {};

  get mealList(): Meal[] {
    return this.mealService.mealList;
  }

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.mealService.load(this.filter);
  }

  select(selected: Meal): void {
    this.selectedMeal = selected;
  }

  delete(meal: Meal): void {
    if (confirm('Are you sure?')) {
      this.mealService.delete(meal).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
