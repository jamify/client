import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Icon, TopBar, VisuallyHidden } from '@shopify/polaris';
import {
  ArrowLeftMinor,
  LanguageMinor,
  ProfileMajorMonotone,
  MobileMajorMonotone,
} from '@shopify/polaris-icons';

import './Navbar.css';

import LoginButton from '../LoginButton';
import { RootState } from '../../store';
import { SystemState } from '../../store/system/types';
import { ProfileState } from '../../store/profile/types';

type NavbarProps = {
  toggleMobileNavigationActive: any;
};

function getInitials(displayName: string): string {
  const initials = displayName.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

const Navbar = ({ toggleMobileNavigationActive }: NavbarProps) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const [t, i18n] = useTranslation('common');

  const history = useHistory();

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const selectSystemState = (state: RootState) => state.system;
  const systemState: SystemState = useSelector(selectSystemState);

  const selectProfileState = (state: RootState) => state.profile;
  const profileState: ProfileState = useSelector(selectProfileState);

  const isLoggedIn = () => {
    return systemState.loggedIn;
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Profile', icon: ProfileMajorMonotone }],
        },
        {
          items: [
            {
              content: 'Devices',
              icon: MobileMajorMonotone,
              onAction: () => {
                history.push('/devices');
              },
            },
          ],
        },
        {
          items: [{ content: 'Logout', icon: ArrowLeftMinor }],
        },
      ]}
      name={profileState.displayName}
      detail={profileState.email}
      initials={getInitials(profileState.displayName)}
      avatar={profileState.imageURL}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const loginContainerMarkup = (
    <div className="navbar-login-container">
      <LoginButton />
    </div>
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={LanguageMinor} />
          <VisuallyHidden>Change Language</VisuallyHidden>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [
            {
              content: 'English',
              onAction: () => {
                i18n.changeLanguage('en');
              },
            },
            {
              content: 'Français',
              onAction: () => {
                i18n.changeLanguage('fr');
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={isLoggedIn() ? userMenuMarkup : loginContainerMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );
};

export default Navbar;
