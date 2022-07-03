import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { Opponent } from '../models/opponent.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  games = [
    {
      code: 'league-of-legends',
      name: 'League of Legends',
      teams: [115, 126204],
      checked: true
    },
    {
      code: 'cs-go',
      name: 'Counter-Strike: Global Offensive',
      teams: [3455],
      checked: true,
    },
    {
      code: 'valorant',
      name: 'Valorant',
      teams: [128796],
      checked: true,
    },
    {
      code: 'rl',
      name: 'Rocket League',
      teams: [129919],
      checked: true,
    },
  ];

  mapResponseToMatchArray(response: Object): Match[] {
    const objectArray: any[] = response as any[];
    return objectArray.map((item) => {
      return {
        id: item.id,
        opponents: item.opponents.map((opp: any) => opp.opponent as Team),
        begin_at: item.begin_at,
        gameName: item.videogame.slug,
        league: item.league,
        status: item.status,
        results: item.results,
        streams: item.streams_list.map((stream: any) => {
          return {
            language: stream.language === 'en' ? 'gb' : stream.language,
            url: stream.raw_url
          }
        }).sort((a:any,b:any) => a.language.localeCompare(b.language)),
        winner_id: item.winner_id
      };
    });
  }

  mapResponseToOpponents(item: any): Opponent[] {
    if (item && item.opponents?.length) {
      return item.opponents.map((opponent: any) => opponent as Opponent);
    } else {
      return [];
    }
  }

  get flatGamesIds(): number[] {
    return this.games.filter((game) => game.checked).map((game) => game.teams).flat();
  }
}
