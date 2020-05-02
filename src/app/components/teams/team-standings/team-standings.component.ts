import { ChampionshipTeam } from './../../../models/ChampionshipTeam';
import { Championship } from './../../../models/Championship';
import { TeamsService } from './../../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/Team';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {

  team:Team;
  standings:ChampionshipTeam[];
  championship:Championship;

  constructor(
    private srv:TeamsService
  ) { }

  ngOnInit() {
    this.team = new Team();
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
        this.findStandings();       
      });
    }else{
      this.findStandings();
    }
  }


  /**
   * 
   */
  findStandings(){
    this.srv.standings( this.team.nameURL ).subscribe( standing =>{
      this.standings = standing;
      if( this.standings ){
        
        this.championship = this.standings[0].championship;
        console.log( this.championship );
      }
    });
  }



}
