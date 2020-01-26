import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import { useAuth, firebase } from 'gatsby-theme-firebase';
import LoginModal from './modals/SignInModal';

const LoginButton = () => {
  const [loginModalOpen, toggleLoginModal] = useState(false);
  const { isLoggedIn, profile } = useAuth();
  return !isLoggedIn ? (
    <>
      <Button color="inherit" onClick={() => toggleLoginModal(!loginModalOpen)}>
        Log in
      </Button>
      {loginModalOpen && <LoginModal />}
    </>
  ) : (
    <>
      <Avatar src={profile.photoURL} />
      <Button color="inherit" onClick={() => firebase.auth().signOut()}>
        Sign out
      </Button>
    </>
  );
};

export default LoginButton;
