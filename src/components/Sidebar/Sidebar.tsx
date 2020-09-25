import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Navigation } from '@shopify/polaris';
import {
  CirclePlusOutlineMinor,
  HintMajorMonotone,
  PopularMajorTwotone,
} from '@shopify/polaris-icons';

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
          icon={CirclePlusOutlineMinor}
          onClick={() => {
            history.push('/host');
          }}
          fullWidth
        >
          Create Channel
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
            label: 'popular',
            icon: PopularMajorTwotone,
          },
          {
            onClick: () => {
              history.push('/popular');
            },
            label: 'new',
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
