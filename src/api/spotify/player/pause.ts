import spotifyClient from '../spotify';

export const pauseTrack = async (): Promise<boolean> => {
  try {
    await spotifyClient().put('/v1/me/player/pause');
    return true;
  } catch (e) {
    return false;
  }
};
