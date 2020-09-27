import React, { useEffect, useState } from 'react';

import { Page } from '@shopify/polaris';

import ChannelsContainer from '../../components/ChannelsContainer';
import ChannelsSkeleton from '../../components/ChannelsSkeleton';

import jamifyAPI from '../../api/jamify';
import NoChannels from '../../components/NoChannels';

const getChannels = async () => {
  const response: any = await jamifyAPI.channels.get.all();
  const { channels } = response;
  const filteredChannels = channels.filter((channel: any) => {
    return !channel.isPaused && channel.track;
  });
  return filteredChannels;
};

const PopularPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels()
      .then((channels) => {
        setChannels(channels);
        setIsLoaded(true);
      })
      .catch(() => {
        setIsLoaded(true);
      });
  }, []);

  const renderBody = () => {
    if (isLoaded) {
      if (channels.length == 0) {
        return <NoChannels />;
      }
      return <ChannelsContainer channels={channels} />;
    }
    return <ChannelsSkeleton />;
  };

  return (
    <Page
      title="Popular"
      subtitle="Browse Jamify channels with the most activity 🚀"
    >
      {renderBody()}
    </Page>
  );
};

export default PopularPage;
