import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryMealService } from '../countrymeal.service';
import { CountryService } from '../../country/country.service';
import { MealService } from '../../meal/meal.service';
import { CountryMeal } from '../countrymeal';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Country } from 'src/app/country/country';
import { CountryFilter } from 'src/app/country/country-filter';
import { Meal } from 'src/app/meal/meal';
import { MealFilter } from 'src/app/meal/meal-filter';

@Component({
  selector: 'app-countrymeal-edit',
  templateUrl: './countrymeal-edit.component.html'
})
export class CountryMealEditComponent implements OnInit {

  id!: string;
  countrymeal!: CountryMeal;
  
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countrymealService: CountryMealService,
    private countryService: CountryService,
    private mealService: MealService) {
  }
  get countries(): Country[] {
    return this.countryService.countryList;
  }

  get meals(): Meal[] {
    return this.mealService.mealList;
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new CountryMeal()); }
          return this.countrymealService.findById(id);
        })
      )
      .subscribe({
        next: countrymeal => {
          this.countrymeal = countrymeal;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });

      this.countryService.load(new CountryFilter());
      this.mealService.load(new MealFilter());
  }

  save() {
    this.countrymealService.save(this.countrymeal).subscribe({
      next: countrymeal => {
        this.countrymeal = countrymeal;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/countrymeals']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/countrymeals']);
  }
}
