import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@material-ui/core';
import { Training } from '../../types';

interface ITrainingsDisplay {
  trainings: Training[];
}

const TrainingsDisplay = ({ trainings }: ITrainingsDisplay) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Datum</TableCell>
          <TableCell>Y</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {trainings.map((training) => (
          <TableRow key={training._id}>
            <TableCell>{training.date.toDate().toLocaleString()}</TableCell>
            <TableCell>{training.headcoach}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TrainingsDisplay;
