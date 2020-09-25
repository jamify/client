import React from 'react';

import { Button } from '@shopify/polaris';
import SpotifyAuthURI from '../../utils/spotifyCallbackURI';

const authorizeSpotify = (): void => {
  window.location.href = SpotifyAuthURI();
};

type LoginButtonProps = {
  fullWidth?: boolean;
};

const LoginButton = (props: LoginButtonProps) => {
  return (
    <Button onClick={authorizeSpotify} primary {...props}>
      Login
    </Button>
  );
};

export default LoginButton;
