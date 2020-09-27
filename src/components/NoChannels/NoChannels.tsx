import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Card, Heading, TextContainer } from '@shopify/polaris';

import './NoChannels.css';

const NoChannels = () => {
  const history = useHistory();
  return (
    <Card sectioned>
      <div className="no-channel-container">
        <img
          className="no-channel-image"
          src="https://raw.githubusercontent.com/jamify/assets/ae998b6667f6981eac73cce587ea4f58658e5853/empty.svg"
        />
        <TextContainer>
          <Heading>No channels found 😞</Heading>
          <p>Feel free to create a channel and let others listen in!</p>
          <Button
            onClick={() => {
              history.push('/host');
            }}
            primary
          >
            Create channel
          </Button>
        </TextContainer>
      </div>
    </Card>
  );
};

export default NoChannels;
