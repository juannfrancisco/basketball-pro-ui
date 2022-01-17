import { TeamStatistics } from './../../../models/TeamStatistics';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { Match } from 'src/app/models/Match';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  match:Match;
  team:Team;
  statistics:TeamStatistics;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private srv:TeamsService
  ) {}

  ngOnInit() {
    this.onInitLoadTeam();
  }

  /**
   * 
   */
  onInitLoadTeam(){
    this.team = this.srv.teamActive;
    if(! this.team ){
      this.srv.getTeamActive().subscribe( teamActive =>{
        this.team = teamActive; 
        this.lastMatch();
        this.findStatistics();    
      });
    }else{
      this.lastMatch();
      this.findStatistics();
    }
  }

  /**
   * 
   */
  lastMatch(){
    this.srv.lastMatch(this.team.nameURL).subscribe( data=>{ 
      this.match = data;
    } );; 
  }


  findStatistics(){
    this.srv.statistics(this.team.nameURL).subscribe( data=>{
      this.statistics = data;
      this.statistics.pointPerGameLocal =  this.statistics.pointPerGameLocal? this.statistics.pointPerGameLocal: 0;
      this.statistics.pointPerGameVisitor =  this.statistics.pointPerGameVisitor? this.statistics.pointPerGameVisitor: 0;
      this.statistics.countGames = this.statistics.countGames? this.statistics.countGames: 0;      
      this.statistics.countGamesLocal = this.statistics.countGamesLocal? this.statistics.countGamesLocal: 0;      
      this.statistics.countGamesVisitor = this.statistics.countGamesVisitor? this.statistics.countGamesVisitor: 0;
      this.statistics.assistsPerGame =  this.statistics.assistsPerGame? this.statistics.assistsPerGame: 0;
      this.statistics.reboundsPerGame =  this.statistics.reboundsPerGame? this.statistics.reboundsPerGame: 0;
      this.statistics.threePointersPerGame =  this.statistics.threePointersPerGame? this.statistics.threePointersPerGame: 0;
      
    } );
  }





}
