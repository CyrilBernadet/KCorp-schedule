import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-rl-match-details',
  templateUrl: './rl-match-details.component.html',
  styleUrls: ['./rl-match-details.component.scss']
})
export class RlMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
