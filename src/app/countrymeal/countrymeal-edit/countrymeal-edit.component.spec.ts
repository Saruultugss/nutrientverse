import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CountryMealEditComponent } from './countrymeal-edit.component';
import { CountryMealService } from '../countrymeal.service';

describe('CountrymealEditComponent', () => {
  let component: CountryMealEditComponent;
  let fixture: ComponentFixture<CountryMealEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMealEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CountryMealService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
