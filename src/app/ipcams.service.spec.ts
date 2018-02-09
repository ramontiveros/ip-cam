import { TestBed, inject } from '@angular/core/testing';

import { IpcamsService } from './ipcams.service';

describe('IpcamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpcamsService]
    });
  });

  it('should be created', inject([IpcamsService], (service: IpcamsService) => {
    expect(service).toBeTruthy();
  }));
});
