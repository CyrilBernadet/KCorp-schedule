import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';
import { Opponent } from 'src/app/models/opponent.model';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-csgo-match-details',
  templateUrl: './csgo-match-details.component.html',
  styleUrls: ['./csgo-match-details.component.scss']
})
export class CsgoMatchDetailsComponent implements OnInit {

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
