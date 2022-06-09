import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html'
})
export class CountryEditComponent implements OnInit {

  id!: string;
  country!: Country;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Country()); }
          return this.countryService.findById(id);
        })
      )
      .subscribe({
        next: country => {
          this.country = country;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.countryService.save(this.country).subscribe({
      next: country => {
        this.country = country;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/countries']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/countries']);
  }
}
