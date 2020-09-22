import React from 'react';

import { Navigation } from '@shopify/polaris';

import { HintMajorMonotone, PopularMajorTwotone } from '@shopify/polaris-icons';

import LoginButton from '../LoginButton';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/popular',
            label: 'popular',
            icon: PopularMajorTwotone,
          },
          {
            url: '/new',
            label: 'new',
            icon: HintMajorMonotone,
          },
        ]}
      />
      <Navigation.Section items={[]} separator />
      <div className="sidebar-login-container">
        <LoginButton fullWidth />
      </div>
    </Navigation>
  );
};

export default Sidebar;
