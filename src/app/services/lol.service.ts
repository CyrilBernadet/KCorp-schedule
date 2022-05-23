import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match.model';
import { Team } from '../models/team.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class LolService {
  private LEC_ID = 115;
  private LFL_ID = 126204;

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getLecMatches(): Observable<Match[]> {
    return this.http
      .get(
        `https://api.pandascore.co/matches?filter\[opponent_id\]=${this.LEC_ID}&token=${environment.API_TOKEN}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }

  getLflMatches(): Observable<Match[]> {
    return this.http
      .get(
        `https://api.pandascore.co/matches?filter\[opponent_id\]=${this.LFL_ID}&token=${environment.API_TOKEN}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}