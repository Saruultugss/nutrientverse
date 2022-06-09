import { Component, OnInit } from '@angular/core';
import { NutrientFilter } from '../nutrient-filter';
import { NutrientService } from '../nutrient.service';
import { Nutrient } from '../nutrient';

@Component({
  selector: 'app-nutrient',
  templateUrl: 'nutrient-list.component.html'
})
export class NutrientListComponent implements OnInit {

  filter = new NutrientFilter();
  selectedNutrient!: Nutrient;
  feedback: any = {};

  get nutrientList(): Nutrient[] {
    return this.nutrientService.nutrientList;
  }

  constructor(private nutrientService: NutrientService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.nutrientService.load(this.filter);
  }

  select(selected: Nutrient): void {
    this.selectedNutrient = selected;
  }

  delete(nutrient: Nutrient): void {
    if (confirm('Are you sure?')) {
      this.nutrientService.delete(nutrient).subscribe({
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
