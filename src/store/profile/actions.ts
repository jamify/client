import { ProfileState, UPDATE_PROFILE, ProfileActionTypes } from './types';

export function updateProfile(newProfile: ProfileState): ProfileActionTypes {
  return {
    type: UPDATE_PROFILE,
    payload: newProfile,
  };
}
