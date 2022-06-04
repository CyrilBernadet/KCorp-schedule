import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { Opponent } from 'src/app/models/opponent.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-valorant-match-details',
  templateUrl: './valorant-match-details.component.html',
  styleUrls: ['./valorant-match-details.component.scss']
})
export class ValorantMatchDetailsComponent implements OnInit {

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
