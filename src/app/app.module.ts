import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { TeamsHomeComponent } from './components/teams/teams-home/teams-home.component';
import { PlayersHomeComponent } from './components/players/players-home/players-home.component';
import { PlayerProfileComponent } from './components/players/player-profile/player-profile.component';
import { TeamProfileComponent } from './components/teams/team-profile/team-profile.component';
import { TeamRosterComponent } from './components/teams/team-roster/team-roster.component';
import { TeamInfoComponent } from './components/teams/team-info/team-info.component';
import { TeamStandingsComponent } from './components/teams/team-standings/team-standings.component';
import { TeamLastResultsComponent } from './components/teams/team-last-results/team-last-results.component';
import { TeamScheduleComponent } from './components/teams/team-schedule/team-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsHomeComponent,
    PlayersHomeComponent,
    PlayerProfileComponent,
    TeamProfileComponent,
    TeamRosterComponent,
    TeamInfoComponent,
    TeamStandingsComponent,
    TeamLastResultsComponent,
    TeamScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
