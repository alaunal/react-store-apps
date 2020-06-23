import React from 'react';
import  {isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Nav from '../../components/Nav';
import ListItem from '../../components/ListItem';

import './main.scss';

const Purchase = (props) => {

    const { dataAuth } = props;

    if(!dataAuth.isLogin) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="c-purchase">
            <Nav headerTitle="Purchase" />

            <div className="row">
                <div className="col-12 px-2 py-3">
                    <ListItem />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      dataAuth: state.auth
    }
}

export default connect(mapStateToProps)(Purchase);