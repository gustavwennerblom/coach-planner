import React, { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import DateTimePicker from '../DateTimePicker';
import moment from 'moment';

interface IProps {
  toggleOpen: (nextState: boolean) => (event: any) => void;
  isOpen: boolean;
  handleAddTraining: (date: Date) => void;
}

const AddTraingDrawer = ({ isOpen, toggleOpen, handleAddTraining }: IProps) => {
  const [trainingDateTime, setTrainingDateTime] = useState(
    moment().format('YYYY-MM-DDThh:mm')
  );
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
          <DateTimePicker
            trainingDateTime={trainingDateTime}
            setTrainingDateTime={setTrainingDateTime}
          />
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleAddTraining(moment(trainingDateTime).toDate())}
          >
            Lägg till schemat
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default AddTraingDrawer;
