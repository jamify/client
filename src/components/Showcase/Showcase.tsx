import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Layout } from '@shopify/polaris';

import { PlayerState } from '../../store/player/types';
import { RootState } from '../../store';

import CommentsContainer from '../CommentsContainer';

import './Showcase.css';

const mockComments = [
  {
    id: '1',
    message: 'a',
    timestamp: 'test',
  },
  {
    id: '2',
    message: 'b',
    timestamp: 'test',
  },
  {
    id: '3',
    message: 'c',
    timestamp: 'test',
  },
  {
    id: '4',
    message: 'd',
    timestamp: 'test',
  },
  {
    id: '5',
    message: 'c',
    timestamp: 'test',
  },
];

const Showcase = () => {
  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const imageURL = playerState.currentTrack?.album.images[0].url;

  const getArtistsText = (): string => {
    const artists = playerState.currentTrack?.artists;
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
        <Card title={playerState.currentTrack?.name} sectioned>
          <p className="channel-creator">Artists: {getArtistsText()}</p>
          <CommentsContainer comments={mockComments} />
        </Card>
      </Layout.Section>
    </Layout>
  );
};

export default Showcase;
