import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import { getToken } from '../services/auth';
import 'firebase/firestore';
import { WithFirebase } from '../hocs/withFirebase';
import { firestore } from 'firebase';

interface Training {
  date: firestore.Timestamp;
  headcoach: string;
  coaches: string[];
}

const TestEntry = () => {
  const [entry, setEntry] = useState('');
  const [hasError, setError] = useState(false);
  const [trainings, setTrainings] = useState<Training[]>([]);
  const firebase = React.useContext(FirebaseContext);

  useEffect(() => {
    if (!firebase) return undefined;
    const db = firebase.firestore();
    let trainingsList: Training[] = [];
    db.collection('test-trainings')
      .get()
      .then((allTrainings) => {
        allTrainings.forEach((training) =>
          trainingsList.push(training.data() as Training)
        );
        setTrainings(trainingsList);
      });
  }, [firebase]);

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

  const renderTrainings = () => {
    return trainings.map((training) => (
      <li>
        {training.date.toDate().toLocaleDateString()}, {training.headcoach}
      </li>
    ));
  };

  return (
    <Layout>
      {hasError && <h2>Submission failed </h2>}
      <input type="text" value={entry} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit entry</button>
      <button onClick={handleAddTraining}>Add training</button>
      <h3>Registered trainings</h3>
      <ul>{renderTrainings()}</ul>
    </Layout>
  );
};

export default TestEntry;
