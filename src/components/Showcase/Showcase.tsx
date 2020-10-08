import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Layout } from '@shopify/polaris';

import { PlayerState } from '../../store/player/types';
import { RootState } from '../../store';

import CommentsContainer from '../CommentsContainer';

import './Showcase.css';

const Showcase = () => {
  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const imageURL = playerState.track?.album.images[0].url;

  const getArtistsText = (): string => {
    const artists = playerState.track?.artists;
    const artistsTextArray: string[] = artists.map((artist: any) => {
      return artist.name;
    });
    return artistsTextArray.join(', ');
  };

  return (
    <Layout>
      <Layout.Section>
        <img className="channel-image" src={imageURL} />
      </Layout.Section>
      <Layout.Section secondary>
        <Card title={playerState.track?.name} sectioned>
          <p className="channel-creator">Artists: {getArtistsText()}</p>
          <CommentsContainer />
        </Card>
      </Layout.Section>
    </Layout>
  );
};

export default Showcase;
