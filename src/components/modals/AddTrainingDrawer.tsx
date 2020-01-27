import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

interface IProps {
  toggleOpen: (nextState: boolean) => (event: any) => void;
  isOpen: boolean;
}

const AddTraingDrawer = ({ isOpen, toggleOpen }: IProps) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleOpen(false)}
      onOpen={toggleOpen(true)}
    >
      <p>Random</p>
      <p>Text</p>
      <p>Here</p>
    </SwipeableDrawer>
  );
};

export default AddTraingDrawer;
