import React from 'react';
import {
  Button,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import DateTimePicker from '../DateTimePicker';

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
      <List>
        <ListItem>
          <Typography variant="h6">
            Vilket datum och klockslag är träningen?
          </Typography>
        </ListItem>
        <ListItem>
          <DateTimePicker />
        </ListItem>
        <ListItem>
          <Button color="primary" variant="contained">
            Lägg till schemat
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default AddTraingDrawer;
