import React, { useState } from 'react';
import Layout from '../components/layout';
import { firestore, useFirestoreQuery } from 'gatsby-theme-firebase';
import { COLLECTIONS } from '../../constants';
import { Training, Coach } from '../../types';
import TrainingsDisplay from '../components/TrainingsDisplay';
import AddCoachDrawer from '../components/modals/AddCoachDrawer';
import { Button } from '@material-ui/core';
import AddTraingDrawer from '../components/modals/AddTrainingDrawer';

const TestEntry = () => {
  const [hasError, setError] = useState(false);
  const [coachDrawerOpen, _toggleCoachDrawer] = useState(false);
  const [addTrainingDrawerOpen, _toggleTrainingDrawer] = useState(false);

  const toggleCoachDrawer = (nextState: boolean) => (event: any) =>
    _toggleCoachDrawer(nextState);

  const toggleTrainingDrawer = (nextState: boolean) => (event: any) =>
    _toggleTrainingDrawer(nextState);

  const [trainings, isLoadingTrainings, trainingQueryError] = useFirestoreQuery<
    Training
  >(firestore.collection(COLLECTIONS.TRAININGS).orderBy('date'));

  const [coaches, isLoadingCoaches, coachQueryError] = useFirestoreQuery<Coach>(
    firestore.collection(COLLECTIONS.COACHES)
  );

  const isLoading = isLoadingTrainings || isLoadingCoaches;
  const queryError = trainingQueryError || coachQueryError;

  const handleAddCoach = async (coach: Coach) => {
    try {
      console.log('Storing', coach);
      await firestore.collection(COLLECTIONS.COACHES).add(coach);
    } catch {
      setError(true);
    }
  };
  const handleAddTraining = async (trainingDate) => {
    const db = firestore;
    try {
      await db.collection(COLLECTIONS.TRAININGS).add({
        date: trainingDate,
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Layout>
      {(hasError || queryError) && <h2>Submission failed </h2>}
      <Button
        color="primary"
        variant="contained"
        onClick={toggleTrainingDrawer(true)}
      >
        Add training
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={toggleCoachDrawer(true)}
      >
        Add coach
      </Button>
      {/* <button onClick={handleSubmit}>Submit entry</button> */}
      <h3>Registered trainings</h3>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <TrainingsDisplay trainings={trainings} coaches={coaches} />
      )}
      {coachDrawerOpen && (
        <AddCoachDrawer
          isOpen={coachDrawerOpen}
          toggleOpen={toggleCoachDrawer}
          handleAddCoach={handleAddCoach}
        />
      )}
      {addTrainingDrawerOpen && (
        <AddTraingDrawer
          isOpen={addTrainingDrawerOpen}
          toggleOpen={toggleTrainingDrawer}
          handleAddTraining={handleAddTraining}
        />
      )}
    </Layout>
  );
};

export default TestEntry;
