import spotifyClient from './spotify';

export const getProfile = () => spotifyClient().get('/v1/me');
