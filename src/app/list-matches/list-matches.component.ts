import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Match } from '../models/match.model';
import { CsgoService } from '../services/csgo.service';
import { LolService } from '../services/lol.service';
import { R6sService } from '../services/r6s.service';
import { RlService } from '../services/rl.service';
import { ValorantService } from '../services/valorant.service';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss'],
})
export class ListMatchesComponent implements OnInit {
  matches: Match[] = [];

  constructor(
    private lolService: LolService,
    private csgoService: CsgoService,
    private r6sService: R6sService,
    private rlService: RlService,
    private valorantService: ValorantService
  ) {}

  ngOnInit(): void {
    forkJoin([
      this.lolService.getLecMatches(),
      this.lolService.getLflMatches(),
      this.csgoService.getMatches(),
      this.r6sService.getMatches(),
      this.rlService.getMatches(),
      this.valorantService.getMatches(),
    ]).subscribe({
      next: (value) => {
        this.matches = value.flat().sort((a,b) => +new Date(a.begin_at) - +new Date(b.begin_at));
      },
    });
  }
}
