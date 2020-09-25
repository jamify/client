const SCOPES: string[] = ['streaming', 'user-read-email', 'user-read-private'];

const SpotifyAuthURI = (): string => {
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

export default SpotifyAuthURI;
