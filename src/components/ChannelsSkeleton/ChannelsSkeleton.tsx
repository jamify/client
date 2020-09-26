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
  let key = 0;
  return [...Array(amount)].map((n: number) => {
    key += 1;
    return (
      <div className="card-container" key={key}>
        <Card sectioned>
          <TextContainer>
            <SkeletonBodyText lines={1} />
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
