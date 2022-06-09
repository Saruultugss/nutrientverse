import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutrientService } from '../nutrient.service';
import { Nutrient } from '../nutrient';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-nutrient-edit',
  templateUrl: './nutrient-edit.component.html'
})
export class NutrientEditComponent implements OnInit {

  id!: string;
  nutrient!: Nutrient;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nutrientService: NutrientService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Nutrient()); }
          return this.nutrientService.findById(id);
        })
      )
      .subscribe({
        next: nutrient => {
          this.nutrient = nutrient;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.nutrientService.save(this.nutrient).subscribe({
      next: nutrient => {
        this.nutrient = nutrient;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/nutrients']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/nutrients']);
  }
}
