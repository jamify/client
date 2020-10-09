import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page } from '@shopify/polaris';

import { RootState } from '../../store';

import { PlayerState, Track } from '../../store/player/types';
import { SystemState } from '../../store/system/types';
import { ProfileState } from '../../store/profile/types';

import {
  updateTrack,
  updateHost,
  resetPlayer,
} from '../../store/player/actions';

import Showcase from '../../components/Showcase';
import { jamifyAPI } from '../../api';

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: any;
  }
}

let lastTimestamp: number = -1;
let lastTrackID: string = '';
let spotifySDK: any;

const HostPage = () => {
  const dispatch = useDispatch();

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const selectProfileState = (state: RootState) => state.profile;
  const profileState: ProfileState = useSelector(selectProfileState);

  useEffect(() => {
    dispatch(updateHost(profileState.id));
    const recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute(
      'src',
      'https://sdk.scdn.co/spotify-player.js'
    );
    document.head.appendChild(recaptchaScript);
    initSpotify();
    return (): void => {
      if (spotifySDK) {
        spotifySDK.disconnect();
      }
      dispatch(resetPlayer());
    };
  }, []);

  const onPlayerStateChange = (state: any) => {
    const currentTrack = state.track_window?.current_track;
    // resolves issue where Spotify SDK pings after 30s of start of song
    const relativeDiff = state.timestamp - lastTimestamp - state.position;
    if (relativeDiff < 1000 && relativeDiff > 0) {
      return;
    }
    if (state.timestamp - lastTimestamp > 1000) {
      const position = currentTrack.id !== lastTrackID ? 0 : state.position;
      const newTrack: Track = {
        id: currentTrack.id,
        uri: currentTrack.uri,
        name: currentTrack.name,
        duration: currentTrack.duration_ms,
        artists: currentTrack.artists,
        album: currentTrack.album,
        paused: state.paused,
        position,
      };
      lastTimestamp = state.timestamp;
      lastTrackID = currentTrack.id;
      dispatch(updateTrack(newTrack));
      jamifyAPI.channels.patch();
    }
  };

  const loadSpotifySDK = async (): Promise<any> => {
    return new Promise((resolve) => {
      if (window.Spotify) {
        resolve(window.Spotify);
      } else {
        window.onSpotifyWebPlaybackSDKReady = () => {
          resolve(window.Spotify);
        };
      }
    });
  };

  const initSpotify = async () => {
    const { Player } = await loadSpotifySDK();
    spotifySDK = new Player({
      name: 'Jamify',
      getOAuthToken: (cb: any) => {
        cb(systemState.session.token);
      },
    });
    spotifySDK.on('initialization_error', (e: any) => {
      console.log('initialization_error');
    });
    spotifySDK.on('authentication_error', (e: any) => {
      console.log('authentication_error');
    });
    spotifySDK.on('account_error', (e: any) => {
      console.log('account_error');
    });
    spotifySDK.on('playback_error', (e: any) => {
      console.log('playback_error');
    });
    spotifySDK.on('ready', () => {
      jamifyAPI.channels.post();
    });
    spotifySDK.on('player_state_changed', (state: any) => {
      if (state) {
        onPlayerStateChange(state);
      }
    });
    spotifySDK.connect();
  };

  const renderDisplayMarkdown = () => {
    const { track } = playerState;
    if (track) {
      return <Showcase />;
    } else {
      return <div>Connect your device by opening up the app.</div>;
    }
  };

  return (
    <Page
      title={`${profileState.displayName}'s Channel`}
      subtitle={'You are currently hosting the channel 🔊'}
    >
      {renderDisplayMarkdown()}
    </Page>
  );
};

export default HostPage;
