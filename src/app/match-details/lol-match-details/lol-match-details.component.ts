import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-lol-match-details',
  templateUrl: './lol-match-details.component.html',
  styleUrls: ['./lol-match-details.component.scss']
})
export class LolMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
