import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { Opponent } from 'src/app/models/opponent.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-rl-match-details',
  templateUrl: './rl-match-details.component.html',
  styleUrls: ['./rl-match-details.component.scss']
})
export class RlMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  opponents: Opponent[] = [];

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getMatch(this.match.id).subscribe((result) => {
      this.opponents = result;
    });
  }

}
