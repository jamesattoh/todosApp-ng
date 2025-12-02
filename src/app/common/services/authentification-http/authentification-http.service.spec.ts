import { TestBed } from '@angular/core/testing';

import { AuthentificationHttpService } from './authentification-http.service';

describe('AuthentificationHttpService', () => {
  let service: AuthentificationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
