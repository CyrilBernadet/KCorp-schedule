import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss'],
})
export class ListMatchesComponent implements OnInit {
  matches: Match[] = [];

  model = {
    left: true,
    middle: false,
    right: false,
  };

  games = [
    {
      code: 'league-of-legends',
      name: 'League of Legends',
      teams: [115, 126204],
      checked: true,
    },
    {
      code: 'cs-go',
      name: 'Counter-Strike: Global Offensive',
      teams: [3455],
      checked: true,
    },
    {
      code: 'valorant',
      name: 'Valorant',
      teams: [128796],
      checked: true,
    },
    {
      code: 'rl',
      name: 'Rocket League',
      teams: [126309],
      checked: true,
    },
  ];

  loading = false;

  constructor(
    private matchesService: MatchesService,
    private scroller: ViewportScroller
  ) {
    this.scroller.setOffset([0, 150]);
  }

  ngOnInit(): void {
    this.loading = true;

    this.matchesService
      .getMatches(this.games.map((game) => game.teams).flat())
      .subscribe({
        next: (value) => {
          this.matches = value
            .flat()
            .sort((a, b) => +new Date(a.begin_at) - +new Date(b.begin_at));

          setTimeout(() => {
            this.scroller.scrollToAnchor(
              `${
                this.matches.filter((match) => new Date(match.begin_at) > new Date())[0]
                  .id
              }`
            );
          });
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  get filteredMatches(): Match[] {
    return this.matches.filter((match) =>
      this.games
        .filter((game) => game.checked)
        .some((game) => game.code === match.gameName)
    );
  }
}
