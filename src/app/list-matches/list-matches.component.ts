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

  constructor(
    private matchesService: MatchesService
  ) {}

  ngOnInit(): void {
    this.matchesService.getMatches(this.games.filter(game => game.checked).map(game => game.teams).flat()).subscribe({
      next: (value) => {
        this.matches = value
          .flat()
          .sort((a, b) => +new Date(a.begin_at) - +new Date(b.begin_at));
      },
    });
  }
}
