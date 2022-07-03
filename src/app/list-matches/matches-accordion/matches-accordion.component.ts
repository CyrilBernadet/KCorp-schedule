import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-matches-accordion',
  templateUrl: './matches-accordion.component.html',
  styleUrls: ['./matches-accordion.component.scss']
})
export class MatchesAccordionComponent implements OnInit {

  @Input()
  matches: Match[] = [];

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  getTeamScore(match: Match, teamId: number): number {
    return match.results.filter(result => result.team_id === teamId)[0].score;
  }

  getHeaderClass(match: Match): string {
    if (match.winner_id) {
      return this.utilsService.flatGamesIds.includes(match.winner_id) ? 'win' : 'lose';
    } else {
      return '';
    }
  }
}
