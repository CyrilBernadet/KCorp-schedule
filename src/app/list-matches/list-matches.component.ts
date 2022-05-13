import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Match } from '../models/match.model';
import { CsgoService } from '../services/csgo.service';
import { LolService } from '../services/lol.service';
import { RlService } from '../services/rl.service';
import { ValorantService } from '../services/valorant.service';

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
      checked: true,
    },
    {
      code: 'cs-go',
      name: 'Counter-Strike: Global Offensive',
      checked: true,
    },
    {
      code: 'valorant',
      name: 'Valorant',
      checked: true,
    },
    {
      code: 'rl',
      name: 'Rocket League',
      checked: true,
    },
  ];

  constructor(
    private lolService: LolService,
    private csgoService: CsgoService,
    private rlService: RlService,
    private valorantService: ValorantService
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.lolService.getLecMatches(),
      this.lolService.getLflMatches(),
      this.csgoService.getMatches(),
      this.rlService.getMatches(),
      this.valorantService.getMatches(),
    ]).subscribe({
      next: (value) => {
        this.matches = value
          .flat()
          .sort((a, b) => +new Date(a.begin_at) - +new Date(b.begin_at));
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
