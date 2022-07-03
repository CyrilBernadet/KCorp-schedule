import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model';
import { MatchesService } from '../services/matches.service';
import { UtilsService } from '../services/utils.service';

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

  loading = false;

  constructor(
    private matchesService: MatchesService,
    private scroller: ViewportScroller,
    private utilsService: UtilsService
  ) {
    this.scroller.setOffset([0, 140]);
  }

  ngOnInit(): void {
    this.loading = true;

    this.loadMatches();
  }

  loadMatches() {
    this.matchesService
      .getMatches(this.utilsService.flatGamesIds)
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

  selectGame(gameCode: string) {
    const clickedGame = this.games.filter(game => game.code === gameCode)[0];
    clickedGame.checked = !clickedGame.checked;
    this.loadMatches();
  }

  get games() {
    return this.utilsService.games;
  }
}
