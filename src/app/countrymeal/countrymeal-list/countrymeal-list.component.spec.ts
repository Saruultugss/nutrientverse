import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CountryMealListComponent } from './countrymeal-list.component';
import { CountryMealService } from '../countrymeal.service';

describe('CountrymealListComponent', () => {
  let component: CountryMealListComponent;
  let fixture: ComponentFixture<CountryMealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMealListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CountryMealService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
