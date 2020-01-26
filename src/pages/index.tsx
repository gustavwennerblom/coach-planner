import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { useAuth } from 'gatsby-theme-firebase';

const IndexPage = () => {
  const { isLoggedIn, profile } = useAuth();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{isLoggedIn ? `Hi ${profile.displayName}` : `Hi guest!`}</h1>

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
