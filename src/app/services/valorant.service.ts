import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Match } from '../models/match.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  private TEAM_ID = 128796;

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getMatches(): Observable<Match[]> {
    return this.http
      .get(
        `https://api.pandascore.co/csgo/matches?filter\[opponent_id\]=${this.TEAM_ID}&sort=&page=1&per_page=10`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}
