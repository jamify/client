import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { Page } from '@shopify/polaris';

import { RootState } from '../../store';
import { PlayerState, Track } from '../../store/player/types';
import { resetPlayer, updatePlayer } from '../../store/player/actions';
import { SystemState } from '../../store/system/types';
import { Device } from '../../store/devices/types';

import Showcase from '../../components/Showcase';

import { spotifyAPI } from '../../api';

import pusher from '../../utils/pusher';

const TRACK = 'track';

let lastUpdate: number = -1;

const ChannelPage = (props: RouteComponentProps) => {
  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const dispatch = useDispatch();

  const params: any = props.match.params;

  const playTrack = () => {
    const track: Track = playerState.track as Track;
    spotifyAPI.player.play(track, systemState.currentDevice as Device);
  };

  useEffect(() => {
    setupPusher();
    return (): void => {
      pusher().unbind_all();
      pusher().disconnect();
      dispatch(resetPlayer());
      spotifyAPI.player.pause();
    };
  }, []);

  const setupPusher = () => {
    const { channelId } = params;
    const channel = pusher().subscribe(channelId);
    channel.bind(TRACK, (data: any) => {
      if (+new Date() - lastUpdate > 1000) {
        const newPlayerState: PlayerState = {
          ...playerState,
          track: data.track,
        };
        lastUpdate = +new Date();
        dispatch(updatePlayer(newPlayerState));
      }
    });
  };

  if (systemState.currentDevice) {
    playTrack();
    return (
      <Page
        title={`${params.channelId}'s Channel`}
        subtitle={'You are currently listening in the channel 🎶'}
      >
        <Showcase />
      </Page>
    );
  }
  return <Redirect to={{ pathname: '/devices' }} />;
};

export default ChannelPage;
