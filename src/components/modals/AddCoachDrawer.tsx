import React, { useState } from 'react';
import { SwipeableDrawer, TextField, Button } from '@material-ui/core';
import { Coach } from '../../../types';

interface IProps {
  toggleOpen: (nextState: boolean) => (event: any) => void;
  isOpen: boolean;
  handleAddCoach: (coach: Coach) => void;
}

const AddCoachDrawer = ({ isOpen, toggleOpen, handleAddCoach }: IProps) => {
  const [newCoach, setNewCoach] = useState<Coach>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleOpen(false)}
      onOpen={toggleOpen(true)}
    >
      <div>
        <TextField
          label="Förnamn"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewCoach({ ...newCoach, firstName: event.target.value })
          }
          value={newCoach.firstName}
        />

        <TextField
          label="Efternamn"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewCoach({ ...newCoach, lastName: event.target.value })
          }
          value={newCoach.lastName}
        />

        <TextField
          label="Telefon"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewCoach({ ...newCoach, phoneNumber: event.target.value })
          }
          value={newCoach.phoneNumber}
        />
      </div>
      <div>
        <Button color="primary" onClick={() => handleAddCoach(newCoach)}>
          Lägg till
        </Button>
      </div>
    </SwipeableDrawer>
  );
};

export default AddCoachDrawer;
