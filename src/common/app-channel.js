import {eventHubFactory} from 'utility-toolkit';

const appCh = eventHubFactory();

export default appCh;
export const TURN_ENDED = 'TURN_ENDED';
export const UPDATE_POINTS = 'UPDATE_POINTS';
export const UPDATE_WINNER = 'UPDATE_WINNER';
export const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';
export const MOVE_PIECE = 'MOVE_PIECE';
