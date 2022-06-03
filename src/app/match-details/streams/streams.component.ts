import { Component, Input, OnInit } from '@angular/core';
import { Stream } from 'src/app/models/stream.model';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  @Input()
  streams: Stream[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
