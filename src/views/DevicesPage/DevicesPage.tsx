import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Layout, Page } from '@shopify/polaris';

import { RootState } from '../../store';
import { Device, DevicesState } from '../../store/devices/types';
import { updateDevices } from '../../store/devices/actions';
import { updateSession } from '../../store/system/actions';
import { SystemState } from '../../store/system/types';

import DevicesSkeleton from '../../components/DevicesSkeleton';

import { spotifyAPI } from '../../api';

const DevicesPage = () => {
  const dispatch = useDispatch();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const selectDevicesState = (state: RootState) => state.devices;
  const devicesState: DevicesState = useSelector(selectDevicesState);

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const refreshDevices = async () => {
    setIsRefreshing(true);
    try {
      const devices = await spotifyAPI.player.devices.get();
      const newDevicesState: DevicesState = {
        devices: devices,
      };
      dispatch(updateDevices(newDevicesState));
    } catch {}
    setIsRefreshing(false);
  };

  const connectDevice = (device: Device) => () => {
    const newSystemState: SystemState = {
      ...systemState,
      currentDevice: device,
    };
    dispatch(updateSession(newSystemState));
  };

  const disconnectDevice = () => {
    const newSystemState: SystemState = {
      ...systemState,
      currentDevice: undefined,
    };
    dispatch(updateSession(newSystemState));
  };

  const generateConnectDeviceCard = (device: Device) => {
    const { id, name, type } = device;
    return (
      <Layout.Section key={id}>
        <Card
          title={`${name} (${type})`}
          primaryFooterAction={{
            content: 'Connect',
            onAction: connectDevice(device),
          }}
        ></Card>
      </Layout.Section>
    );
  };

  const generateDisconnectDeviceCard = (device: Device) => {
    const { id, name, type } = device;
    return (
      <Layout.Section key={id}>
        <Card
          title={`${name} (${type})`}
          primaryFooterAction={{
            destructive: true,
            content: 'Disconnect',
            onAction: disconnectDevice,
          }}
        ></Card>
      </Layout.Section>
    );
  };

  const generateDeviceCards = (devices: Device[]) => {
    const { currentDevice } = systemState;
    if (currentDevice) {
      const { id } = currentDevice;
      return devices.map((device: Device) => {
        return device.id === id
          ? generateDisconnectDeviceCard(device)
          : generateConnectDeviceCard(device);
      });
    }
    return devices.map((device: Device) => {
      return generateConnectDeviceCard(device);
    });
  };

  const renderContent = () => {
    if (isRefreshing) {
      return <DevicesSkeleton />;
    } else {
      return generateDeviceCards(devicesState.devices);
    }
  };

  useEffect(() => {
    refreshDevices();
  }, []);

  return (
    <Page
      title="Devices"
      subtitle="Select a device from below to stream music on 📺"
      primaryAction={
        <Button primary onClick={refreshDevices} loading={isRefreshing}>
          Refresh
        </Button>
      }
    >
      <Layout>{renderContent()}</Layout>
    </Page>
  );
};

export default DevicesPage;
