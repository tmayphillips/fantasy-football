import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockPlayerArray, mockPlayer } from 'src/mock/playerArray';
import { PlayerStatsService } from '../stats.service';

import { PlayerSearchComponent } from './player-search.component';

describe('PlayerSearchComponent', () => {
  let component: PlayerSearchComponent;
  let fixture: ComponentFixture<PlayerSearchComponent>;
  let service: PlayerStatsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSearchComponent ], 
      imports: [HttpClientModule],
      providers: [PlayerStatsService]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(PlayerStatsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check functionality of getPlayerArray()', done => {
    
    const fixture = TestBed.createComponent(PlayerSearchComponent);
    const app = fixture.componentInstance;

    spyOn(app, 'getPlayerArray').and.callThrough();


    app.getPlayerArray()
   

    // expect(players.length).toBeGreaterThan(0)
    // })

    service.getPlayers().then((res:any) => {
      console.log('flag', res.length)
      done()
    })

    let players = app.players
    console.log('players', players)

  })

  it('check functionality of changeType', () => {
    const fixture = TestBed.createComponent(PlayerSearchComponent);
    const app = fixture.componentInstance;
    app.changeType('regular')
    expect(app.type).toBe('FantasyPoints')
  })

  it('check functionality of onSelectPlayer', () => {
    const fixture = TestBed.createComponent(PlayerSearchComponent);
    const app = fixture.componentInstance;
    app.onSelectPlayer(mockPlayer)
    expect(app.playerSelected).toBe(true)
  })


});
