import {
  PlayerState,
  PlayerActionTypes,
  UPDATE_PLAYER,
  UPDATE_TRACK,
  UPDATE_HOST,
  RESET_PLAYER,
} from './types';

const initialPlayerState: PlayerState = {
  host: '',
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
    case UPDATE_TRACK: {
      return {
        ...state,
        track: action.payload,
      };
    }
    case UPDATE_HOST: {
      return {
        ...state,
        host: action.payload,
      };
    }
    case RESET_PLAYER: {
      return initialPlayerState;
    }
    default:
      return state;
  }
}
