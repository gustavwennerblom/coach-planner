import React from 'react';
import { FirebaseContext } from 'gatsby-plugin-firebase';

export interface withFirebaseProps {
  firebase: string;
}

export const WithFirebase = (Component: React.ComponentType) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
