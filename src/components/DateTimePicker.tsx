import React from 'react';
import { TextField } from '@material-ui/core';
import moment from 'moment';

const DateTimePicker = () => {
  return (
    <TextField
      label="Date & Time"
      type="datetime-local"
      defaultValue={moment().format('YYYY-MM-DDThh:mm')}
    />
  );
};

export default DateTimePicker;
