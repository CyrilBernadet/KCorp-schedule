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
        `https://vitality-schedule.herokuapp.com/api/matches?teamIds=${this.TEAM_ID}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}
