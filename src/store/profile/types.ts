export interface ProfileState {
  product: string;
  email: string;
  displayName: string;
  country: string;
  uri: string;
  imageURL: string;
  id: string;
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: ProfileState;
}

export type ProfileActionTypes = UpdateProfileAction;
