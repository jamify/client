import React from 'react';

import { Card, Layout } from '@shopify/polaris';

import './Channel.css';

const Channel = (props: any) => {
  const {
    channel: { track },
  } = props;
  const {
    album: { images },
    name,
  } = track;
  const coverImage = images[0].url;
  return (
    <Layout.Section oneHalf>
      <Card title={name} primaryFooterAction={{ content: 'Join Channel' }}>
        <Card.Section>
          <img src={coverImage} />
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Channel;
