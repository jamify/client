import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { RootState } from '../../store';
import { SystemState } from '../../store/system/types';
import SpotifyAuthURI from '../../utils/spotifyCallbackURI';

export const AuthenticatedRoute = ({
  component,
  isAuthenticated,
  ...rest
}: any) => {
  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  if (systemState.loggedIn) {
    return <Route {...rest} component={component} />;
  }
  return (
    <Route {...rest} render={() => (window.location.href = SpotifyAuthURI)} />
  );
};

export default AuthenticatedRoute;
