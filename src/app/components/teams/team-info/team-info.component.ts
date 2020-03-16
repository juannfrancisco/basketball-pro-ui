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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private srv:TeamsService
  ) {}

  ngOnInit() {

    this.srv.getTeamActive().subscribe( teamActive =>{
      this.team = teamActive;
      this.lastMatch();
    });

  }

  lastMatch(){
    this.srv.lastMatch(this.team.nameURL).subscribe( data=>{ 
      this.match = data;
    } );;
    
  }




}
