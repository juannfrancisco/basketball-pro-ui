import { TeamStatistics } from './../models/TeamStatistics';
import { ChampionshipTeam } from './../models/ChampionshipTeam';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Team } from '../models/Team';
import { Observable, Subject } from 'rxjs';
import { Match } from '../models/Match';
import { Player } from '../models/Player';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamActiveSubject : Subject<Team>;
  teamActive : Team;

  constructor(private http: HttpClient) { 
    this.teamActiveSubject = new Subject();
  }


  setTeam( team:Team){
    this.teamActiveSubject.next( team);
    this.teamActive = team;
  }

  getTeamActive( ){
    return this.teamActiveSubject.asObservable();
  }




  // APIs -------
  

  findAll(){
    return this.http.get(environment.apiEndpoint + "teams" );
  }

  findByNameURL( nameURL:string ){
    return this.http.get<Team>(environment.apiEndpoint + "teams/n/"+ nameURL );
  }


  lastMatch( nameURL:string ){
    return this.http.get<Match>(environment.apiEndpoint + "teams/n/"+ nameURL + "/last-match" );
  }

  players( nameURL:string ){
    return this.http.get<Player[]>(environment.apiEndpoint + "teams/n/"+ nameURL + "/players" );
  }


  standings( nameURL:string ){
    return this.http.get<ChampionshipTeam[]>(environment.apiEndpoint + "teams/n/"+ nameURL + "/standings" );
  }

  findMatches( nameURL:string ){
    return this.http.get<Match[]>(environment.apiEndpoint + "teams/n/"+ nameURL + "/matches" );
  }


  statistics( nameURL:string ){
    return this.http.get<TeamStatistics>(environment.apiEndpoint + "teams/n/"+ nameURL + "/statistics" );     
  }
 



}
