import { Device } from '../../../store/devices/types';
import { Track } from '../../../store/player/types';
import spotifyClient from '../spotify';

interface Body {
  uris: string[];
  position_ms: number;
}

export const playTrack = async (
  track: Track,
  device: Device
): Promise<boolean> => {
  const body: Body = {
    uris: [track.uri],
    position_ms: 0,
  };
  const response = await spotifyClient().put(
    `/v1/me/player/play?device_id=${device.id}`,
    body
  );
  return true;
};
