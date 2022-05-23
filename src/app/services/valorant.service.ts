import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
        `https://api.pandascore.co/matches?filter\[opponent_id\]=${this.TEAM_ID}&token=${environment.API_TOKEN}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}
