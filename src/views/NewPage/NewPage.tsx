import React, { useEffect, useState } from 'react';

import { Page } from '@shopify/polaris';

import ChannelsContainer from '../../components/ChannelsContainer';
import ChannelsSkeleton from '../../components/ChannelsSkeleton';
import NoChannels from '../../components/NoChannels';

import jamifyAPI from '../../api/jamify';

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
      if (!channels.length) {
        return <NoChannels />;
      }
      return <ChannelsContainer channels={channels} />;
    }
    return <ChannelsSkeleton />;
  };

  return (
    <Page title="New" subtitle="Browse recently created Jamify channels ✨">
      {renderBody()}
    </Page>
  );
};

export default PopularPage;
