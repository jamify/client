import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Heading, TextContainer, Thumbnail } from '@shopify/polaris';

import { RootState } from '../../store';
import { PlayerState } from '../../store/player/types';
import { SystemState } from '../../store/system/types';

import { updatePlayer } from '../../store/player/actions';

import './Channel.css';

const Channel = (props: any) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const channelId = props.channel._id;

  const {
    channel: { track, position, isPaused },
  } = props;

  const {
    album: { images },
    artists,
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

  const getArtistsText = (): string => {
    const artistsTextArray: string[] = artists.map((artist: any) => {
      return artist.name;
    });
    return artistsTextArray.join(', ');
  };

  return (
    <div className="card-container" onClick={joinChannel}>
      <Card sectioned>
        <TextContainer>
          <p className="channel-id">Host: {channelId}</p>
          <Thumbnail size="large" source={coverImage} alt="Album cover art" />
          <div className="channel-title">{name}</div>
          <p className="channel-artists">By: {getArtistsText()}</p>
        </TextContainer>
      </Card>
    </div>
  );
};

export default Channel;
