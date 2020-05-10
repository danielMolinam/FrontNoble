import { TestBed } from '@angular/core/testing';

import { ServiceXmlService } from './service-xml.service';

describe('ServiceXmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceXmlService = TestBed.get(ServiceXmlService);
    expect(service).toBeTruthy();
  });
});
