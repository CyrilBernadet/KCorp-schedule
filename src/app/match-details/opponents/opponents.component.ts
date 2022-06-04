import { Component, Input, OnInit } from '@angular/core';
import { Opponent } from 'src/app/models/opponent.model';

@Component({
  selector: 'app-opponents',
  templateUrl: './opponents.component.html',
  styleUrls: ['./opponents.component.scss']
})
export class OpponentsComponent implements OnInit {

  @Input()
  opponents: Opponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
