import { Component, OnInit } from '@angular/core';
import { CountryFilter } from '../country-filter';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country',
  templateUrl: 'country-list.component.html'
})
export class CountryListComponent implements OnInit {

  filter = new CountryFilter();
  selectedCountry!: Country;
  feedback: any = {};

  get countryList(): Country[] {
    return this.countryService.countryList;
  }

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.countryService.load(this.filter);
  }

  select(selected: Country): void {
    this.selectedCountry = selected;
  }

  delete(country: Country): void {
    if (confirm('Are you sure?')) {
      this.countryService.delete(country).subscribe({
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
