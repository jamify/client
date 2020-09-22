/*
{
  "birthdate": "1999-07-15",
  "country": "CA",
  "display_name": "Daniel Wu",
  "email": "daniel_kt_wu@msn.com",
  "explicit_content": {
    "filter_enabled": false,
    "filter_locked": false
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/user/danielktwu"
  },
  "followers": {
    "href": null,
    "total": 27
  },
  "href": "https://api.spotify.com/v1/users/danielktwu",
  "id": "danielktwu",
  "images": [
    {
      "height": null,
      "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1181973575164717&height=300&width=300&ext=1603294271&hash=AeQnmVRGuAdAMYN8",
      "width": null
    }
  ],
  "product": "premium",
  "type": "user",
  "uri": "spotify:user:danielktwu"
}

*/

export interface ProfileState {
  product: string;
  email: string;
  displayName: string;
  country: string;
  uri: string;
  imageURL: string;
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload: ProfileState;
}

export type ProfileActionTypes = UpdateProfileAction;
