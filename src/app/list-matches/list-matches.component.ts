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

  finishedMatches: Match[] = [];
  runningMatches: Match[] = [];
  upcomingMatches: Match[] = [];

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

    this.loadMatches();
  }

  loadMatches() {
    this.matchesService
      .getMatches(this.games.filter((game) => game.checked).map((game) => game.teams).flat())
      .subscribe({
        next: (value) => {
          const matches = value
            .flat()
            .sort((a, b) => +new Date(a.begin_at) - +new Date(b.begin_at));

          this.finishedMatches = matches.filter((match) => match.status === 'finished');
          this.runningMatches = matches.filter((match) => match.status === 'running');
          this.upcomingMatches = matches.filter((match) => match.status === 'not_started');
        },
        complete: () => {
          setTimeout(() => {
            if (this.runningMatches.length) {
              this.scroller.scrollToAnchor('runningMatches');
            } else {
              this.scroller.scrollToAnchor('upcomingMatches');
            }
          }, 100);

          this.loading = false;
        },
      });
  }
}
