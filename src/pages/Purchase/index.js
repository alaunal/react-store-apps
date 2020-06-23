import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Nav from '../../components/Nav';
import ListItem from '../../components/ListItem';

import './main.scss';

const Purchase = (props) => {

    const { dataAuth, dataPurchase } = props;
    const dataItems = !isEmpty(dataPurchase) ? dataPurchase : [];

    if(!dataAuth.isLogin) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="c-purchase">
            <Helmet>
                <title>Purchase Page - Store Apps</title>
                <meta
                name="description"
                content="A React.js Boilerplate application homepage storeApps | Purchase page"
                />
            </Helmet>
            <Nav headerTitle="Purchase" />

            <div className="row">
                <div className="col-12 px-2 py-3">
                    {
                    !isEmpty(dataItems) ? <ListItem data={dataItems} isLazy={false} /> : 
                        <div className="c-purchase__notfound pt-6">
                            <h2>Not Have Item!</h2>
                            <p>add to cart for next to checkout!</p>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        dataPurchase: state.dataPurchase,
      dataAuth: state.auth
    }
}

Purchase.propTypes = {
    dataAuth: PropTypes.object,
    dataPurchase: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(Purchase);