import { Championship } from './Championship';
import { Team } from './Team';

export class ChampionshipTeam {
    oid:number;
    team:Team;
    championship:Championship;
    points:number;
    playGames:number;
    lostGames:number;
    winGames:number;
}