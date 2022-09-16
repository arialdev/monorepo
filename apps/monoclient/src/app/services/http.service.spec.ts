import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HTTPService } from './http.service';

describe('HTTPService', () => {
  let service: HTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(HTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
