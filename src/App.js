import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider, Frame } from '@shopify/polaris';

import './App.css';

import Navbar from './components/Navbar';
import CallbackPage from './views/CallbackPage';
import Sidebar from './components/Sidebar';

function App() {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
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
      primary: '#40a355',
    },
    logo: {
      width: 40,
      topBarSource:
        'https://raw.githubusercontent.com/jamify/assets/f3587610a46acb54630041f7276dd010d921dfb8/logo/logo.svg',
      url: '/',
      accessibilityLabel: 'Jamify',
    },
  };

  return (
    <div>
      <AppProvider
        theme={theme}
        features={{ newDesignLanguage: true }}
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
          topBar={
            <Navbar
              toggleMobileNavigationActive={toggleMobileNavigationActive}
            />
          }
          navigation={<Sidebar />}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
          <div>
            <Router>
              <Switch>
                <Route path="/popular"></Route>
                <Route path="/new"></Route>
                <Route path="/callback" component={CallbackPage}></Route>
              </Switch>
            </Router>
          </div>
        </Frame>
      </AppProvider>
    </div>
  );
}

export default App;
