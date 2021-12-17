import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerStatsService } from '../stats.service';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})

export class PlayerSearchComponent implements OnInit {
  
  public searchFilter: any = '';
  player:Player = new Player(0,'','','','',0)
  players: Array<any> = []
  query:string = ''
  playerID:number = 0
  selectedPlayer:string = ''
  season:number = 0;
  week:number = 0;
  playerStats:any[] = [];
  weeks:string[] = [];
  fantasyPoints:number[] = [];
  playerSelected:boolean = false;
  type:string = 'FantasyPoints'
  
  openDrop: boolean = false;

  constructor(
    private playerStatsService:PlayerStatsService
  ) { }

  ngOnInit(): void {
    this.getPlayerArray()
  }

  getPlayerArray() {
    this.playerStatsService
      .getPlayers()
      .then((resp:any) => {
        this.players = resp;
      })
  }

  selectPlayer(player:any) {
    console.log(player.PlayerID)
  }

  onOpenDrop(state:any) {
    this.openDrop = state;
  }

  onSelectPlayer(rawPlayer:any) {
    this.query = ''
    let fullTeam:string = ''
    let abbTeam:string = rawPlayer.Team  
    let teamsObj:any = {
      'ARI':'Arizona Cardinals', 
      ATL:'Atlanta Falcons', 
      BAL:'Baltimore Ravens', 
      BUF:'Buffalo Bills', 
      CAR:'Carolina Panthers', 
      CHI:'Chicago Bears', 
      CIN:'Cincinnati Bengals', 
      CLE:'Cleveland Browns',
      DAL:'Dallas Cowboys',
      DEN:'Denver Broncos',
      DET:'Detroit Lions',
      GB:'Green Bay Packers',
      HOU:'Houston Texans',
      IND:'Indianapolis Colts',
      JAX:'Jacksonville Jaguars',
      KC:'Kansas City Chiefs',
      MIA:'Miami Dolphins',
      MIN:'Minnesota Vikings',
      NE:'New England Patriots',
      NO:'New Orleans Saints',
      NYG:'NY Giants',
      NYJ:'NY Jets',
      LV:'Las Vegas Raiders',
      PHI:'Philadelphia Eagles',
      PIT:'Pittsburgh Steelers',
      LAC:'Los Angeles Chargers',
      SF:'San Francisco 49ers',
      SEA:'Seattle Seahawks',
      LAR:'Los Angeles Rams',
      TB:'Tampa Bay Buccaneers',
      TEN:'Tennessee Titans',
      WAS:'Washington Football Team'
    }
    fullTeam = teamsObj[rawPlayer.Team]
    this.player = new Player(rawPlayer.PlayerID, rawPlayer.PhotoUrl, `${rawPlayer.FirstName} ${rawPlayer.LastName}`, fullTeam, rawPlayer.Position, rawPlayer.Number)
    this.playerSelected = true
  }

  changeType(type:string) {
    switch(type) {
      case 'regular': 
        this.type = 'FantasyPoints'
        break;
      case 'ppr':
        this.type = 'FantasyPointsPPR'
        break;
      case 'yahoo': 
        this.type = 'FantasyPointsYahoo'
        break;
      case 'draftkings':
        this.type = 'FantasyPointsDraftKings'
        break;
      case 'fanduel':
        this.type = 'FantasyPointsFanDuel'
        break;
    }
  } 
}
