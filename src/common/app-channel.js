import {eventHubFactory} from 'utility-toolkit';

const appCh = eventHubFactory();

export default appCh;
export TURN_ENDED = 'TURN_ENDED';
export UPDATE_POINTS = 'UPDATE_POINTS';
export UPDATE_WINNER = 'UPDATE_WINNER';
export UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';
