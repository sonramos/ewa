import { TestBed } from '@angular/core/testing';

import { CompanyFirestoreService } from './company-firestore.service';

describe('CompanyFirestoreService', () => {
  let service: CompanyFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
