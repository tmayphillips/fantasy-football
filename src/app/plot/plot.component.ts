import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerStatsService } from '../stats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  playerID:number = 0
  player:Player | undefined;
  season:number = 0;
  week:number = 0;
  playerStats:any[] = [];
  weeks:string[] = [];
  fantasyPoints:number[] = [];


  constructor(
    private playerStatsService:PlayerStatsService,
    private router: Router,
    public route: ActivatedRoute

  ) { }

  public graph = {
    data: [{
      x: this.weeks,
      y: this.fantasyPoints,
      type: 'scatter'
    }],
    layout: {
      title: 'Fantasy Points by Week'
    }
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.playerID = Number(routeParams.get('playerID'));
    this.getWeek();
    this.getSeason();
    
    
  }

  getSeason() {
    this.playerStatsService
      .getCurrent('Season')
      .then((resp:any) => {
        this.season = resp
        this.getStats()
      })
  }

  getWeek() {
    this.playerStatsService
      .getCurrent('Week')
      .then((resp:any) => {
        this.week = resp;
      })
  }

  getStats() {
    this.playerStatsService
      .getPlayerStats(this.season, this.playerID)
      .then((resp:any) => {
        this.playerStats.push(resp)
        this.getData()
      })
  }

  getData() {
    let playerStats:any[] = this.playerStats[0]
    playerStats.forEach(element => {
      this.weeks = [...this.weeks, element.Week]
      this.fantasyPoints = [...this.fantasyPoints, element.FantasyPointsYahoo]
    })
    console.log(this.fantasyPoints, this.weeks)
  }


  
}
