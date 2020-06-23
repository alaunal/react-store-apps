import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './main.scss';

const Layout = props => {

	const { children } = props;

    return (
      <div>
          <Helmet
            titleTemplate="Store of Apps"
            defaultTitle="Store of Apps"
          >
            <meta name="description" content="Store of simple apps" />
          </Helmet>
            
          <main className="o-root">
						<div className="o-root__wrapper">
							{ children }
						</div>
          </main>
      </div>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};


export default Layout;