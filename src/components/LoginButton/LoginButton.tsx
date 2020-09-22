import React from 'react';

import { Button } from '@shopify/polaris';

const SCOPES: string[] = ['streaming', 'user-read-email', 'user-read-private'];

const authorizeSpotify = (): void => {
  window.location.href = generateURI();
};

const generateURI = (): string => {
  const SPOTIFY_APP_CLIENT_ID: string = process.env
    .REACT_APP_SPOTIFY_APP_CLIENT_ID as string;
  const SPOTIFY_REDIRECT_URI: string = process.env
    .REACT_APP_SPOTIFY_REDIRECT_URI as string;
  return (
    `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_APP_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}` +
    `&scope=${encodeURIComponent(SCOPES.join(' '))}` +
    `&response_type=token`
  );
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
