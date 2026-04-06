import React from 'react';
import Layout from '@theme/Layout';
import Landing from '@site/src/components/Landing';

export default function Home() {
  return (
    <Layout
      title="Mo Lotfollahi | Machine Learning and AI for Biomedical Science"
      description="Faculty at Wellcome Sanger Institute & Cambridge. ML for single-cell biology, perturbation modeling, and drug discovery.">
      <main>
        <Landing />
      </main>
    </Layout>
  );
}
