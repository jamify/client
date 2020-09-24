import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navigation } from '@shopify/polaris';
import { HintMajorMonotone, PopularMajorTwotone } from '@shopify/polaris-icons';

import LoginButton from '../LoginButton';

import './Sidebar.css';

const Sidebar = withRouter(({ history }) => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            onClick: () => {
              history.push('/popular');
            },
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
});

export default Sidebar;
