import { Player } from './Player';

export class Team {
  
    oid:number;
    name:string;
    nameURL:string;
    bio:string;
    category:string;
    coach:any;
    contact:any;
    gender: string;
    players: Player[];
  }