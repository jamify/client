import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import spotifyAPI from '../../api';
import { updateProfile } from '../../store/profile/actions';
import { ProfileState } from '../../store/profile/types';

import { updateSession } from '../../store/system/actions';
import { SessionState, SystemState } from '../../store/system/types';

type SpotifyHash = { [id: string]: string };

const buildHash = (argString: string): SpotifyHash => {
  const hash: SpotifyHash = {};
  const argsAndSrc = argString.split(/src=/);
  const argArray = argsAndSrc[0].split('&');
  for (let i = 0; i < argArray.length; i += 1) {
    const nameVal = argArray[i].split('=');
    if (i === 0) {
      const name = nameVal[0];
      nameVal[0] = name.slice(1);
    }
    hash[nameVal[0]] = decodeURI(nameVal[1]);
  }
  return hash;
};

const CallbackPage = (props: RouteComponentProps) => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const argString = props.location.hash;
    const hash: SpotifyHash = buildHash(argString);
    const sessionState: SessionState = {
      token: hash.access_token,
      tokenType: hash.token_type,
      expiresIn: parseInt(hash.expires_in),
    };
    const systemState: SystemState = {
      loggedIn: true,
      session: sessionState,
      userName: 'Daniel Wu',
    };
    dispatch(updateSession(systemState));
    spotifyAPI.profile.get().then((response) => {
      const { data } = response;
      const newProfileState: ProfileState = {
        product: data.product,
        email: data.email,
        displayName: data.display_name,
        country: data.country,
        uri: data.uri,
        imageURL: data.images[0].url,
      };
      dispatch(updateProfile(newProfileState));
    });
    history.push('/');
  });

  return (
    <div>
      <p>
        You have successfully logged in to Spotify, redirecting you back to
        Jamify now...
      </p>
    </div>
  );
};

export default CallbackPage;
