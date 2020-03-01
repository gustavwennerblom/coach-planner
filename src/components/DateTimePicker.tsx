import React from 'react';
import { TextField } from '@material-ui/core';

const DateTimePicker = ({ trainingDateTime, setTrainingDateTime }) => {
  return (
    <TextField
      label="Datum & Tid"
      type="datetime-local"
      value={trainingDateTime}
      onChange={(event) => setTrainingDateTime(event.target.value)}
    />
  );
};

export default DateTimePicker;
