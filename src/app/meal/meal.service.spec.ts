import { TestBed } from '@angular/core/testing';
import { MealService } from './meal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MealService', () => {
  let service: MealService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealService]
    });

    service = TestBed.get(MealService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
