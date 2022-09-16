import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
