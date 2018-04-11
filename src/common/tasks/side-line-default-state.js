import {Sword} from 'game/pieces/sword.piece';
import {Spear} from 'game/pieces/spear.piece';
import {Shield} from 'game/pieces/shield.piece';


export function sideLineDefaultState(type) {
  if (type === 'swords') {
    return [new Sword(),new Sword(),new Sword(),new Sword(),new Sword(),new Sword(),new Sword(),new Sword(),new Sword()]
  }
  if (type === 'spears') {
    return [new Spear(),new Spear(),new Spear(),new Spear(),new Spear(),new Spear(),new Spear(),new Spear(),new Spear()]
  }
  if (type === 'shields') {
    return [new Shield(),new Shield(),new Shield(),new Shield(),new Shield(),new Shield(),new Shield(),new Shield(),new Shield()]
  }


}
