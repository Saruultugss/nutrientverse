import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NutrientListComponent } from './nutrient-list.component';
import { NutrientService } from '../nutrient.service';

describe('NutrientListComponent', () => {
  let component: NutrientListComponent;
  let fixture: ComponentFixture<NutrientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NutrientListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [NutrientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
