import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@material-ui/core';
import { Training, Coach } from '../../types';

interface ITrainingsDisplay {
  trainings: Training[];
  coaches: Coach[];
}

const TrainingsDisplay = ({ trainings, coaches }: ITrainingsDisplay) => {
  console.log(trainings);
  const sortedCoaches = coaches.sort();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Datum</TableCell>
          {sortedCoaches.map((coach) => (
            <TableCell key={`thead-${coach._id}`}>
              {coach.firstName} ({coach._id})
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {trainings.map((training: Training) => (
          <TableRow key={training._id}>
            <TableCell>{training.date.toDate().toLocaleString()}</TableCell>
            {sortedCoaches.map((coach) => (
              <TableCell key={`${training._id}-${coach._id}`}>
                {training.coaches?.find((tc) => tc.coachId === coach._id)?.role}
              </TableCell>
            ))}
            {/* <TableCell>{training.headcoach}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TrainingsDisplay;
