import React, { useCallback, useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

import { Icon, TopBar, VisuallyHidden } from '@shopify/polaris';
import { ArrowLeftMinor, LanguageMinor, ProfileMajorMonotone } from '@shopify/polaris-icons';

type NavbarProps = {
  toggleMobileNavigationActive: any,
}

const Navbar = ({ toggleMobileNavigationActive }: NavbarProps) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const [t, i18n] = useTranslation('common');

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    [],
  );

  const loginButton = (
    <div>
      asdfg
    </div>
  )

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Profile', icon: ProfileMajorMonotone }],
        },
        {
          items: [{ content: 'Logout', icon: ArrowLeftMinor }],
        },
      ]}
      name="Daniel Wu"
      detail="wuon@protonmail.com"
      initials="DW"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
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
              onAction: () => { i18n.changeLanguage('en') },
            },
            {
              content: 'Français',
              onAction: () => { i18n.changeLanguage('fr') },
            },
          ],
        },
      ]}
    />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );
}

export default Navbar;
