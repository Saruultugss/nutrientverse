import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MealEditComponent } from './meal-edit.component';
import { MealService } from '../meal.service';

describe('MealEditComponent', () => {
  let component: MealEditComponent;
  let fixture: ComponentFixture<MealEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [MealService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
