import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider, Frame } from '@shopify/polaris';

import './App.css';

import Navbar from './components/Navbar';
import CallbackPage from './views/CallbackPage';
import Sidebar from './components/Sidebar';
import AuthenticatedRoute from './components/AuthenticatedRoute';

import PopularPage from './views/PopularPage';
import DevicesPage from './views/DevicesPage';
import HostPage from './views/HostPage';
import ChannelPage from './views/ChannelPage';
import NewPage from './views/NewPage';

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
      <AppProvider theme={theme} features={{ newDesignLanguage: true }}>
        <Router>
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
              <Switch>
                <Route exact path="/" component={PopularPage} />
                <Route path="/popular" component={PopularPage} />
                <Route path="/new" component={NewPage} />
                <Route path="/callback" component={CallbackPage} />
                <AuthenticatedRoute path="/host" component={HostPage} />
                <AuthenticatedRoute path="/devices" component={DevicesPage} />
                <AuthenticatedRoute
                  path="/channels/:channelId"
                  component={ChannelPage}
                />
              </Switch>
            </div>
          </Frame>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
