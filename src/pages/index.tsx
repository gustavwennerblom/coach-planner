import React from 'react';
import { Link } from 'gatsby';
import { FirebaseContext } from 'gatsby-plugin-firebase';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { getUser, setUser, setToken, isLoggedIn } from '../services/auth';

const IndexPage = () => {
  const firebase = React.useContext(FirebaseContext);

  const handleLogin = async () => {
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebaseui-auth-container', {
    //   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    // });
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log('Credential is:', result.credential);
    console.log('User is', result.user);
    setUser(result.user);
    setToken(result.credential['accessToken']);
  };

  const currentUser = getUser();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{isLoggedIn() ? `Hi ${currentUser.displayName}` : `Hi guest!`}</h1>
      {!isLoggedIn() && <button onClick={handleLogin}>Log in</button>}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div id="firebaseui-auth-container" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/test-entry/">Test data entry</Link>
    </Layout>
  );
};

export default IndexPage;
