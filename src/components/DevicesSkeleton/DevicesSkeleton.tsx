import React from 'react';

import {
  Card,
  Layout,
  SkeletonDisplayText,
  TextContainer,
} from '@shopify/polaris';

import './DevicesSkeleton.css';

const generateDeviceCards = (amount: number) => {
  let key = 0;
  return [...Array(amount)].map((n: number) => {
    key += 1;
    return (
      <Layout.Section key={key}>
        <Card>
          <Card.Section>
            <TextContainer>
              <SkeletonDisplayText size="small"></SkeletonDisplayText>
              <div className="button-container">
                <div className="connect-button">
                  <SkeletonDisplayText size="small"></SkeletonDisplayText>
                </div>
              </div>
            </TextContainer>
          </Card.Section>
        </Card>
      </Layout.Section>
    );
  });
};

const DevicesSkeleton = () => {
  return <>{generateDeviceCards(3)}</>;
};

export default DevicesSkeleton;
