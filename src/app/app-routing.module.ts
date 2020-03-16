import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { TeamsHomeComponent } from './components/teams/teams-home/teams-home.component';
import { TeamProfileComponent } from './components/teams/team-profile/team-profile.component';
import { PlayersHomeComponent } from './components/players/players-home/players-home.component';
import { PlayerProfileComponent } from './components/players/player-profile/player-profile.component';
import { TeamRosterComponent } from './components/teams/team-roster/team-roster.component';
import { TeamInfoComponent } from './components/teams/team-info/team-info.component';
import { TeamStandingsComponent } from './components/teams/team-standings/team-standings.component';
import { TeamLastResultsComponent } from './components/teams/team-last-results/team-last-results.component';
import { TeamScheduleComponent } from './components/teams/team-schedule/team-schedule.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"teams", component:TeamsHomeComponent},
  {
    path:"teams/:id", component:TeamProfileComponent,
    children:[
      {path: '',component: TeamInfoComponent},
      {path: 'info',component: TeamInfoComponent},
      {path: 'roster',component: TeamRosterComponent},
      {path: 'standings',component: TeamStandingsComponent},
      {path: 'last-results',component: TeamLastResultsComponent},
      {path: 'schedule',component: TeamScheduleComponent}
    ]
  },
  {path:"players", component:PlayersHomeComponent},
  {path:"players/:id", component:PlayerProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
