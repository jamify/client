import React from 'react';

import { Card, Layout } from '@shopify/polaris';

import './Channel.css';
import { useDispatch, useSelector } from 'react-redux';
import { spotifyAPI } from '../../api';
import { RootState } from '../../store';
import { Device, DevicesState } from '../../store/devices/types';
import { Track } from '../../store/player/types';
import { SystemState } from '../../store/system/types';

const Channel = (props: any) => {
  const dispatch = useDispatch();

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const {
    channel: { track },
  } = props;
  const {
    album: { images },
    name,
  } = track;
  const joinChannel = () => {
    const trackToPlay: Track = track;
    spotifyAPI.player.play(trackToPlay, systemState.currentDevice as Device);
  };
  const coverImage = images[0].url;
  return (
    <Layout.Section oneHalf>
      <Card
        title={name}
        primaryFooterAction={{ content: 'Join Channel', onAction: joinChannel }}
      >
        <Card.Section>
          <img src={coverImage} />
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Channel;
