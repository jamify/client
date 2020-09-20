import React, { useCallback, useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AppProvider, Frame } from '@shopify/polaris';

import './App.css';

import Navbar from './components/Navbar';

function App() {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );

  const theme = {
    colors: {
      topBar: {
        background: '#FFFFFF',
        backgroundLighter: '#F4F6F8',
        backgroundDarker: '#DFE3E8',
        border: '#C4CDD5',
        color: '#212B36',
      },
    },
    logo: {
      width: 40,
      topBarSource: 'https://raw.githubusercontent.com/jamify/assets/master/logo/alt-logo.svg',
      url: '/',
      accessibilityLabel: 'Jamify',
    },
  };

  return (
    <div>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            Frame: { skipToContent: 'Skip to content' },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',
              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
          },
        }}
      >
        <Frame
          topBar={<Navbar/>}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
          <div class="content-container">
            <Router>
              <Switch>
              </Switch>
            </Router>
          </div>
        </Frame>
      </AppProvider>
    </div>
  );
}

export default App;
