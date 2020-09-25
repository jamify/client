import React, { useEffect, useState } from 'react';

import { Page, Spinner } from '@shopify/polaris';

import ChannelsContainer from '../../components/ChannelsContainer';
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
        console.log(channels);
        setIsLoaded(true);
      })
      .catch(() => {
        setIsLoaded(true);
      });
  }, []);

  if (isLoaded) {
    if (channels.length == 0) {
      return <div>No active channels 😞</div>;
    }
    return (
      <Page title="Popular">
        <ChannelsContainer channels={channels} />
      </Page>
    );
  }
  return <Spinner size="large" color="teal" />;
};

export default PopularPage;
