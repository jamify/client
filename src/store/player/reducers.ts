import { PlayerState, PlayerActionTypes, UPDATE_PLAYER } from './types';

const initialPlayerState: PlayerState = {
  isPaused: true,
  position: 0,
  comments: [],
};

export function playerReducer(
  state = initialPlayerState,
  action: PlayerActionTypes
): PlayerState {
  switch (action.type) {
    case UPDATE_PLAYER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
