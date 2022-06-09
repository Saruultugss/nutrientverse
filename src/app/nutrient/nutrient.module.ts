import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NutrientListComponent } from './nutrient-list/nutrient-list.component';
import { NutrientEditComponent } from './nutrient-edit/nutrient-edit.component';
import { NutrientService } from './nutrient.service';
import { NUTRIENT_ROUTES } from './nutrient.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(NUTRIENT_ROUTES)
  ],
  declarations: [
    NutrientListComponent,
    NutrientEditComponent
  ],
  providers: [NutrientService],
  exports: []
})
export class NutrientModule { }
