import React from 'react';
import { hot } from 'react-hot-loader/root';

import Layout from './components/Layout';
import Routes from './routes';

const App = () => (
  <div>
    <Layout>
      <Routes />
    </Layout>
  </div>
);

export default hot(App);