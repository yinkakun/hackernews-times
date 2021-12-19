import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/layout';
import Container from '@/components/container';

const Home: React.FC<PageProps> = () => (
  <Layout title="Hackernews Times">
    <Container>
      <h1 className="text-6xl text-center font-heading">
        See, Ink Is Currently Not Available
      </h1>
      <p className="mt-4 text-center">watch this space for some awesomeness!</p>
    </Container>
  </Layout>
);

export default Home;
