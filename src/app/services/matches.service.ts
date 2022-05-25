import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Match } from '../models/match.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getMatches(teams: number[]): Observable<Match[]> {
    return this.http
      .get(
        `https://vitality-schedule.herokuapp.com/api/matches?teamIds=${teams.join(',')}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}
