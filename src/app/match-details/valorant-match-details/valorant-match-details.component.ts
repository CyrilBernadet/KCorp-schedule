import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-valorant-match-details',
  templateUrl: './valorant-match-details.component.html',
  styleUrls: ['./valorant-match-details.component.scss']
})
export class ValorantMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
