import React, { useState } from 'react';
import Layout from '../components/layout';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import { getToken } from '../services/auth';
import 'firebase/firestore';

const TestEntry = () => {
  const [entry, setEntry] = useState('');
  const [hasError, setError] = useState(false);
  const firebase = React.useContext(FirebaseContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntry(event.target.value);
  };

  const handleSubmit = async () => {
    console.log('entry is: ', entry);
    const authToken = getToken();
    console.log(authToken);
    // if (!authToken) return Error('No token in session');
    const db = firebase.firestore();
    try {
      await db.collection('test').add({
        value: entry,
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleAddTraining = async () => {
    const authToken = getToken();
    const db = firebase.firestore();
    try {
      await db.collection('test-trainings').add({
        date: new Date(2020, 2, 3),
        headcoach: 'test-Maria',
        coaches: ['test-Gustav', 'test-Jens'],
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Layout>
      {hasError && <h2>Submission failed </h2>}
      <input type="text" value={entry} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit entry</button>
      <button onClick={handleAddTraining}>Add training</button>
    </Layout>
  );
};

export default TestEntry;
