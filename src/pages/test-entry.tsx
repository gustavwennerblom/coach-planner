import React, { useState } from 'react';
import Layout from '../components/layout';
import { firestore, useFirestoreQuery } from 'gatsby-theme-firebase';
import { COLLECTIONS } from '../../constants';
import { Training } from '../../types';

const TestEntry = () => {
  const [entry, setEntry] = useState('');
  const [hasError, setError] = useState(false);

  const [trainings, isLoading, queryError] = useFirestoreQuery<Training>(
    firestore.collection(COLLECTIONS.TRAININGS).orderBy('date')
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntry(event.target.value);
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

  const renderTrainings = () => {
    return trainings.map((training) => (
      <li key={training._id}>
        {training.date.toDate().toLocaleDateString()}, {training.headcoach}
      </li>
    ));
  };

  return (
    <Layout>
      {(hasError || queryError) && <h2>Submission failed </h2>}
      <input type="text" value={entry} onChange={handleChange} />
      <button onClick={handleAddTraining}>Add training</button>
      {/* <button onClick={handleSubmit}>Submit entry</button> */}
      <h3>Registered trainings</h3>
      {isLoading ? <p>Loading</p> : <ul>{renderTrainings()}</ul>}
    </Layout>
  );
};

export default TestEntry;
