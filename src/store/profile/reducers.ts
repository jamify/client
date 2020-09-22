import { ProfileState, ProfileActionTypes, UPDATE_PROFILE } from './types';

const initialProfileState: ProfileState = {
  product: '',
  email: '',
  displayName: '',
  country: '',
  uri: '',
  imageURL: '',
};

export function profileReducer(
  state = initialProfileState,
  action: ProfileActionTypes
): ProfileState {
  switch (action.type) {
    case UPDATE_PROFILE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
