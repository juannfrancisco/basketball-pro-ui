import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.css']
})
export class TeamsHomeComponent implements OnInit {

  constructor( private srv:TeamsService ) { }
  teams:any;


  ngOnInit() {

    this.srv.findAll().subscribe( data=>{ this.teams = data; } );

  }



}
