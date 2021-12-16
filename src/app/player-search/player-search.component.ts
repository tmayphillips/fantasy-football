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
  players: Array<any> = []
  // player:Player
  playerId:number = 732;
  year:number = 2021;
  week:number = 14;
  query:string = ''

  

  constructor(private playerStatsService:PlayerStatsService) { }

  ngOnInit(): void {
    this.getPlayerArray()
  }

  getPlayerArray() {
    this.playerStatsService
      .getPlayers()
      .then((resp:any) => {
        this.players = resp;
        console.log(this.players)
      })
  }

  selectPlayer(player:any) {
    console.log(player.PlayerID)
  }

}
