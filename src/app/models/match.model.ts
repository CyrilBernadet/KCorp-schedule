import { League } from './league.model';
import { Team } from './team.model';

export class Match {
  id!: number;
  opponents !: Team[];
  begin_at!: Date;
  gameName!: string;
  league!: League;
  status!: string;
}
