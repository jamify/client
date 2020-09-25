import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Layout } from '@shopify/polaris';

import { RootState } from '../../store';
import { PlayerState } from '../../store/player/types';
import { SystemState } from '../../store/system/types';

import { updatePlayer } from '../../store/player/actions';

import './Channel.css';

const Channel = (props: any) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const channelId = props.channel._id;
  const {
    channel: { track, position, isPaused },
  } = props;
  const {
    album: { images },
    name,
  } = track;
  const joinChannel = () => {
    const newPlayerState: PlayerState = {
      isPaused,
      position,
      currentTrack: track,
    };
    dispatch(updatePlayer(newPlayerState));
    history.push(`/channels/${channelId}`);
  };

  const coverImage = images[0].url;
  return (
    <Layout.Section>
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
