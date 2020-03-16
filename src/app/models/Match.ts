import { Championship } from './Championship';
import { Team } from './Team';

export class Match {
    
    oid:number;
    championship: Championship;
    date:string;
    local:Team;
    visitor:Team;
    scoreLocal:number;
    scoreVisitor:number;

}