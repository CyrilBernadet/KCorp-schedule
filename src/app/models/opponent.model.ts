import { Player } from './player.model';

export class Opponent {
  name!: string;
  image_url!: string;
  players: Player[] = [];
}
