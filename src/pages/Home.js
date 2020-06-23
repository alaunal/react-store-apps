import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';
import { isEmpty } from 'lodash';

import { setDataStore } from '../actions/dataStore';

import Landing from './Landing';

const Home = (props) => {

  const { dataAuth, dataStore, setDataStore } = props;

  useEffect(() => {
    // -- Get Data Store
    getDataStore();
  });

  const getDataStore = () => {

    if(isEmpty(dataStore)) {
      axios.get(`https://private-4639ce-ecommerce56.apiary-mock.com/home`)
      .then(res => {
        const dataStore = res.data;

        if(!isEmpty(dataStore)) {
          setDataStore(dataStore[0].data);
        }
        
      })
    }
  };


  if(!dataAuth.isLogin) {
    return <Redirect to={'/login'} />
  }

  return (<Landing />);
  
};

const mapStateToProps = state => {
  return {
    dataAuth: state.auth,
    dataStore: state.dataStore,
  }
}

const mapDispatchToProps = dispatch => ({
  setDataStore: (data) => { dispatch(setDataStore(data)) }
});

Home.propTypes = {
  dataAuth: PropTypes.object,
  dataStore: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);