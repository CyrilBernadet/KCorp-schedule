import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { Opponent } from 'src/app/models/opponent.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-lol-match-details',
  templateUrl: './lol-match-details.component.html',
  styleUrls: ['./lol-match-details.component.scss']
})
export class LolMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  opponents: Opponent[] = [];

  sortedRoles = ['top', 'jun', 'mid', 'adc', 'sup'];

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getMatch(this.match.id).subscribe((result) => {
      this.opponents = result;

      this.opponents.forEach((opponent) => {
        opponent.players.sort((a, b) => this.sortedRoles.indexOf(a.role) - this.sortedRoles.indexOf(b.role))
      });
    });
  }

}
