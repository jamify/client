import React from 'react';

import { Page } from '@shopify/polaris';

import ChannelsContainer from '../../components/ChannelsContainer';

const mockResponse = {
  isSuccess: true,
  channels: [
    {
      _id: 'danielktwu',
      listeners: [
        {
          name: 'andrewkp1999',
          profile: '',
          id: '',
        },
      ],
      track: {
        id: '4SzyebNrhvPJ8y4r1D1PXD',
        uri: 'spotify:track:4SzyebNrhvPJ8y4r1D1PXD',
        type: 'track',
        linked_from_uri: null,
        linked_from: {
          uri: null,
          id: null,
        },
        media_type: 'audio',
        name: 'Jealousy',
        duration_ms: 224570,
        artists: [
          {
            name: 'Roy Woods',
            uri: 'spotify:artist:7mDU6nMUJnOSY2Hkjz5oqM',
          },
        ],
        album: {
          uri: 'spotify:album:2vnPwMLtMXZWGkKsoylsGt',
          name: 'Exis',
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e0296f667a42104498e24f75bd8',
              height: 300,
              width: 300,
            },
            {
              url:
                'https://i.scdn.co/image/ab67616d0000485196f667a42104498e24f75bd8',
              height: 64,
              width: 64,
            },
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b27396f667a42104498e24f75bd8',
              height: 640,
              width: 640,
            },
          ],
        },
        is_playable: true,
        paused: true,
        position: 0,
      },
      updatedAt: '2020-02-04T03:15:17.540Z',
      createdAt: '2020-01-19T16:09:50.757Z',
    },
    {
      _id: 'danielktwu2',
      listeners: [
        {
          name: 'andrewkp1999',
          profile: '',
          id: '',
        },
      ],
      track: {
        id: '4SzyebNrhvPJ8y4r1D1PXD',
        uri: 'spotify:track:4SzyebNrhvPJ8y4r1D1PXD',
        type: 'track',
        linked_from_uri: null,
        linked_from: {
          uri: null,
          id: null,
        },
        media_type: 'audio',
        name: 'Jealousy',
        duration_ms: 224570,
        artists: [
          {
            name: 'Roy Woods',
            uri: 'spotify:artist:7mDU6nMUJnOSY2Hkjz5oqM',
          },
        ],
        album: {
          uri: 'spotify:album:2vnPwMLtMXZWGkKsoylsGt',
          name: 'Exis',
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d00001e0296f667a42104498e24f75bd8',
              height: 300,
              width: 300,
            },
            {
              url:
                'https://i.scdn.co/image/ab67616d0000485196f667a42104498e24f75bd8',
              height: 64,
              width: 64,
            },
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b27396f667a42104498e24f75bd8',
              height: 640,
              width: 640,
            },
          ],
        },
        is_playable: true,
        paused: true,
        position: 0,
      },
      updatedAt: '2020-02-04T03:15:17.540Z',
      createdAt: '2020-01-19T16:09:50.757Z',
    },
  ],
};

const PopularPage = () => {
  return (
    <Page title="Popular" fullWidth>
      <ChannelsContainer channels={mockResponse.channels} />
    </Page>
  );
};

export default PopularPage;
