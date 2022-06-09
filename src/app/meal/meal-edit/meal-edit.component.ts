import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../meal.service';
import { Meal } from '../meal';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html'
})
export class MealEditComponent implements OnInit {

  id!: string;
  meal!: Meal;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mealService: MealService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Meal()); }
          return this.mealService.findById(id);
        })
      )
      .subscribe({
        next: meal => {
          this.meal = meal;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.mealService.save(this.meal).subscribe({
      next: meal => {
        this.meal = meal;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/meals']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/meals']);
  }
}
