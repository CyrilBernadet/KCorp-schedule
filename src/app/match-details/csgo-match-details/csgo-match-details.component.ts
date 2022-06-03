import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-csgo-match-details',
  templateUrl: './csgo-match-details.component.html',
  styleUrls: ['./csgo-match-details.component.scss']
})
export class CsgoMatchDetailsComponent implements OnInit {

  @Input()
  match!: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
