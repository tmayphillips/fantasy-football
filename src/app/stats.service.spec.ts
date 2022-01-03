import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PlayerStatsService } from './stats.service';
import { mockPlayerArray } from '../mock/playerArray';

describe('PlayerStatsService', () => {
  let service: PlayerStatsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(PlayerStatsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPlayers and receive response', (done) => {
    const spy = spyOn(service, 'getPlayers').and.returnValue(Promise.resolve(true))
    service.getPlayers()
  
    spy.calls.mostRecent().returnValue.then((res:any) => {
      console.log(res)
      expect(res).toBeTruthy()
      done()
    })
  })

  it('should call getCurrent and receive response', (done) => {
    const spy = spyOn(service, 'getCurrent').and.returnValue(Promise.resolve(true))
    service.getCurrent('2021')
  
    spy.calls.mostRecent().returnValue.then((res:any) => {
      console.log(res)
      expect(res).toBeTruthy()
      done()
    })
  })

  it('should call getPlayerStats and receive response', (done) => {
    const spy = spyOn(service, 'getPlayerStats').and.returnValue(Promise.resolve(true))
    service.getPlayerStats(2021, 732)
  
    spy.calls.mostRecent().returnValue.then((res:any) => {
      console.log(res)
      expect(res).toBeTruthy()
      done()
    })
  })

});
