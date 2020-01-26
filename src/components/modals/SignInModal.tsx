import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { SocialLogins } from 'gatsby-theme-firebase';
import { setUserAndToken } from '../../services/auth';

const SignInModal = () => {
  const [isOpen, toggleOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => toggleOpen(false)}>
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <SocialLogins
          onSuccess={(userCredential) => setUserAndToken(userCredential)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
