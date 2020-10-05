import React from 'react';

import { Button, Card, Heading, TextContainer } from '@shopify/polaris';

import './NoMessages.css';

const NoMessages = () => {
  return (
    <div className="no-message-container">
      <img
        className="no-message-image"
        src="https://raw.githubusercontent.com/jamify/assets/4e43bcb6355b64686baa40c4ca2aa7b283c3ff1b/no_messages.svg"
      />
      <TextContainer>
        <p>No messages found 🤐</p>
      </TextContainer>
    </div>
  );
};

export default NoMessages;
