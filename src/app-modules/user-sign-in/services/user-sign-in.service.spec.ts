import { TestBed } from '@angular/core/testing';

import { UserSignInService } from './user-sign-in.service';

describe('UserSignInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSignInService = TestBed.get(UserSignInService);
    expect(service).toBeTruthy();
  });
});
