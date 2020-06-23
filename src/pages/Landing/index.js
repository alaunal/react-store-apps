import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Helmet } from 'react-helmet';

import SearchBar from './components/SearchBar';
import BottomBar from './components/BottomBar';
import ListCategory from './components/ListCategory';
import CardItem from './components/CardItem';

import './main.scss';

const Landing = (props) => {

    const { dataStore } = props;
    const dataCategory = !isEmpty(dataStore.category) ? dataStore.category : [];
    const dataItems = !isEmpty(dataStore.productPromo) ? dataStore.productPromo : [];

    return (
        <div className="c-landing">
            <Helmet>
                <title>HomePage of - Store Apps</title>
                <meta
                name="description"
                content="A React.js Boilerplate application homepage storeApps"
                />
            </Helmet>
            <SearchBar />
            <ListCategory data={dataCategory} isLazy={true} />
            <div className="row">
                <div className="col-12 py-3 px-2">
                    <CardItem data={dataItems} isLazy={true} />
                </div>
            </div>
            <BottomBar />
        </div>
    );
};

const mapStateToProps = state => {
    return {
      dataStore: state.dataStore,
    }
}

Landing.propTypes = {
    dataStore: PropTypes.object
};

export default connect(mapStateToProps)(Landing);