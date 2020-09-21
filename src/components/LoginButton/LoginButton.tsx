import React from 'react';

import { Button, ThemeProvider } from '@shopify/polaris';

import './LoginButton.css';

const LoginButton = () => {
  return (
    <div className="button-container">
      <Button primary>Login</Button>
    </div>
  )
}

export default LoginButton;
