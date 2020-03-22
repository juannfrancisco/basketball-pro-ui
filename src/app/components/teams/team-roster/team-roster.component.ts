import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/Team';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {

  team:Team;
  players:Player[];

  constructor(
    private srv:TeamsService    
  ) {
    console.log("Constructor");
   }

  ngOnInit() {

    console.log("Init");

    this.team = this.srv.teamActive;
    if(! this.team ){
      this.srv.getTeamActive().subscribe( teamActive =>{
        this.team = teamActive;
        this.findPlayers();
      });
    }else{
      this.findPlayers();  
    }
  }

  findPlayers(){
    this.srv.players( this.team.nameURL ).subscribe( players =>{
      this.team.players = players;
      this.players = players;
      console.log(this.team);
    });
  }

}
