import { TestBed } from '@angular/core/testing';
import { CountryMealService } from './countrymeal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountrymealService', () => {
  let service: CountryMealService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryMealService]
    });

    service = TestBed.get(CountryMealService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
