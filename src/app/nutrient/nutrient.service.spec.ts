import { TestBed } from '@angular/core/testing';
import { NutrientService } from './nutrient.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NutrientService', () => {
  let service: NutrientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NutrientService]
    });

    service = TestBed.get(NutrientService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
