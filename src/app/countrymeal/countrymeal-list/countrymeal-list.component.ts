import { Component, OnInit } from '@angular/core';
import { CountryMealFilter } from '../countrymeal-filter';
import { CountryMealService } from '../countrymeal.service';
import { CountryMeal } from '../countrymeal';

@Component({
  selector: 'app-countrymeal',
  templateUrl: 'countrymeal-list.component.html'
})
export class CountryMealListComponent implements OnInit {

  filter = new CountryMealFilter();
  selectedCountrymeal!: CountryMeal;
  feedback: any = {};

  get countrymealList(): CountryMeal[] {
    return this.countrymealService.countrymealList;
  }

  constructor(private countrymealService: CountryMealService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.countrymealService.load(this.filter);
  }

  select(selected: CountryMeal): void {
    this.selectedCountrymeal = selected;
  }

  delete(countrymeal: CountryMeal): void {
    if (confirm('Are you sure?')) {
      this.countrymealService.delete(countrymeal).subscribe({
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
