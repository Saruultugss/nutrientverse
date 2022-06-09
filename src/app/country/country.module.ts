import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryService } from './country.service';
import { COUNTRY_ROUTES } from './country.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COUNTRY_ROUTES)
  ],
  declarations: [
    CountryListComponent,
    CountryEditComponent
  ],
  providers: [CountryService],
  exports: []
})
export class CountryModule { }
