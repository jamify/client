import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Navigation } from '@shopify/polaris';
import { HintMajorMonotone, PopularMajorTwotone } from '@shopify/polaris-icons';

import { RootState } from '../../store';
import { SystemState } from '../../store/system/types';

import LoginButton from '../LoginButton';

import './Sidebar.css';

const Sidebar = withRouter(({ history }) => {
  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const renderButton = () => {
    if (systemState.loggedIn) {
      return (
        <Button
          onClick={() => {
            history.push('/host');
          }}
          fullWidth
          primary
        >
          Create channel
        </Button>
      );
    }
    return <LoginButton fullWidth />;
  };
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            onClick: () => {
              history.push('/popular');
            },
            label: 'Popular',
            icon: PopularMajorTwotone,
          },
          {
            onClick: () => {
              history.push('/new');
            },
            label: 'New',
            icon: HintMajorMonotone,
          },
        ]}
      />
      <Navigation.Section items={[]} separator />
      <div className="sidebar-login-container">{renderButton()}</div>
    </Navigation>
  );
});

export default Sidebar;
