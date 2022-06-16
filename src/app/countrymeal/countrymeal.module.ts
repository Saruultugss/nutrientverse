import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryMealListComponent } from './countrymeal-list/countrymeal-list.component';
import { CountryMealEditComponent } from './countrymeal-edit/countrymeal-edit.component';
import { CountryMealService } from './countrymeal.service';
import { COUNTRYMEAL_ROUTES } from './countrymeal.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COUNTRYMEAL_ROUTES)
  ],
  declarations: [
    CountryMealListComponent,
    CountryMealEditComponent
  ],
  providers: [CountryMealService],
  exports: []
})
export class CountryMealModule { }
