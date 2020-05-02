import { Match } from 'src/app/models/Match';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/Team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-last-results',
  templateUrl: './team-last-results.component.html',
  styleUrls: ['./team-last-results.component.css']
})
export class TeamLastResultsComponent implements OnInit {

  team:Team;
  matches:Match[];

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
        this.findMatches();       
      });
    }else{
      this.findMatches();
    }
  }



  /**
   * 
   */
  findMatches(){
    this.srv.findMatches( this.team.nameURL ).subscribe( matches =>{
      this.matches = matches;

      for( let i in this.matches ){

        if( this.matches[i].local.nameURL == this.team.nameURL ){
          this.matches[i].status = "Local";
          this.matches[i].versus = this.matches[i].visitor;
          this.matches[i].result = this.matches[i].scoreLocal > this.matches[i].scoreVisitor?'W':'L';
        }else{
          this.matches[i].status = "Visita";
          this.matches[i].versus = this.matches[i].local;
          this.matches[i].result = this.matches[i].scoreVisitor > this.matches[i].scoreLocal?'W':'L';
        }
    }


      console.log( matches );
    } );
  }



  goGame(match){
    console.log(match);
    //$location.path( '/games/'+match.oid );
  }



}
