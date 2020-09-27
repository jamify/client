import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { RootState } from '../../store';
import { PlayerState, Track } from '../../store/player/types';
import { SystemState } from '../../store/system/types';

import Showcase from '../../components/Showcase';

import { Device } from '../../store/devices/types';
import { spotifyAPI } from '../../api';
import { Page } from '@shopify/polaris';
import { updatePlayer } from '../../store/player/actions';

import socket from '../../utils/socket';

let lastUpdate: number = -1;

const ChannelPage = (props: RouteComponentProps) => {
  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const dispatch = useDispatch();

  const params: any = props.match.params;

  const playTrack = () => {
    const track: Track = playerState.currentTrack as Track;
    spotifyAPI.player.play(track, systemState.currentDevice as Device);
  };

  useEffect(() => {
    return (): void => {
      const newPlayerState: PlayerState = {
        currentTrack: undefined,
        ...playerState,
      };
      dispatch(updatePlayer(newPlayerState));
    };
  }, []);

  socket.on('track', (data: any) => {
    if (+new Date() - lastUpdate > 2000) {
      const newPlayerState: PlayerState = {
        currentTrack: data.track,
        position: data.position,
        isPaused: data.isPaued,
      };
      lastUpdate = +new Date();
      dispatch(updatePlayer(newPlayerState));
    }
  });

  if (systemState.currentDevice) {
    socket.emit('channel', params.channelId);
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
