import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/Team';


@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  team:Team;

  constructor(
    private route: ActivatedRoute,
    private srv:TeamsService
  ) {

    this.team = new Team();
   }

  ngOnInit() {
    let teamNameURL = this.route.snapshot.paramMap.get('id');

    this.srv.findByNameURL(teamNameURL).subscribe( data=>{ 
      this.team = data; 
      this.srv.setTeam( data );
    } );

  }

}
