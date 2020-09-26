import React from 'react';

import {
  Card,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonThumbnail,
  TextContainer,
} from '@shopify/polaris';

import './ChannelsSkeleton.css';

const generateSkeletons = (amount: number) => {
  return [...Array(amount)].map(() => {
    return (
      <div className="card-container">
        <Card sectioned>
          <TextContainer>
            <SkeletonThumbnail size="large" />
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText lines={2} />
          </TextContainer>
        </Card>
      </div>
    );
  });
};

const ChannelsSkeleton = () => {
  return <div className="layout-container">{generateSkeletons(8)}</div>;
};

export default ChannelsSkeleton;
