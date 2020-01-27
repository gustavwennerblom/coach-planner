import React, { useState } from 'react';
import Layout from '../components/layout';
import { firestore, useFirestoreQuery } from 'gatsby-theme-firebase';
import { COLLECTIONS } from '../../constants';
import { Training, Coach } from '../../types';
import TrainingsDisplay from '../components/TrainingsDisplay';
import AddCoachDrawer from '../components/modals/AddCoachDrawer';
import { Button } from '@material-ui/core';

const TestEntry = () => {
  const [entry, setEntry] = useState('');
  const [hasError, setError] = useState(false);
  const [coachDrawerOpen, _toggleCoachDrawer] = useState(false);

  const toggleCoachDrawer = (nextState: boolean) => (event: any) =>
    _toggleCoachDrawer(nextState);

  const [trainings, isLoading, queryError] = useFirestoreQuery<Training>(
    firestore.collection(COLLECTIONS.TRAININGS).orderBy('date')
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntry(event.target.value);
  };

  const handleAddCoach = async (coach: Coach) => {
    try {
      await firestore.collection(COLLECTIONS.COACHES).add(coach);
    } catch {
      setError(true);
    }
  };
  const handleAddTraining = async () => {
    const db = firestore;
    try {
      await db.collection(COLLECTIONS.TRAININGS).add({
        date: new Date(2021, 2, 3),
        headcoach: 'test-Maria',
        coaches: ['test-Gustav', 'test-Jens'],
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Layout>
      {(hasError || queryError) && <h2>Submission failed </h2>}
      <input type="text" value={entry} onChange={handleChange} />
      <button onClick={handleAddTraining}>Add training</button>
      <Button onClick={toggleCoachDrawer(true)}>Add coach</Button>
      {/* <button onClick={handleSubmit}>Submit entry</button> */}
      <h3>Registered trainings</h3>
      {isLoading ? <p>Loading</p> : <TrainingsDisplay trainings={trainings} />}
      {coachDrawerOpen && (
        <AddCoachDrawer
          isOpen={coachDrawerOpen}
          toggleOpen={toggleCoachDrawer}
        />
      )}
    </Layout>
  );
};

export default TestEntry;
