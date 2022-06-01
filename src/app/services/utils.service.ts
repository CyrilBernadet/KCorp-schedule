import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  mapResponseToMatch(response: Object): Match[] {
    const objectArray: any[] = response as any[];
    return objectArray.map((item) => {
      return {
        id: item.id,
        opponents: item.opponents.map((opp: any) => opp.opponent as Team),
        begin_at: item.begin_at,
        gameName: item.videogame.slug,
        league: item.league,
        status: item.status
      };
    });
  }
}
