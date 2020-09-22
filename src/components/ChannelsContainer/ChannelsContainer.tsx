import React from 'react';

import { Layout } from '@shopify/polaris';

import Channel from '../Channel';

type ChannelsContainerProps = {
  channels: any;
};

const generateChannelsMarkup = (channels: any) => {
  return channels.map((channel: any) => {
    return <Channel key={channel._id} channel={channel} />;
  });
};

const ChannelsContainer = (props: ChannelsContainerProps) => {
  const { channels } = props;
  const channelMarkup = generateChannelsMarkup(channels);
  return <Layout>{channelMarkup}</Layout>;
};

export default ChannelsContainer;
