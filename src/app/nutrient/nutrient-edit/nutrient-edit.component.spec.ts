import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NutrientEditComponent } from './nutrient-edit.component';
import { NutrientService } from '../nutrient.service';

describe('NutrientEditComponent', () => {
  let component: NutrientEditComponent;
  let fixture: ComponentFixture<NutrientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NutrientEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [NutrientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
