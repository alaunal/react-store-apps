import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import { Helmet } from 'react-helmet';

import { setUserAuth } from '../../actions/userAuth';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import './main.scss';

const Login = (props) => {

    const { dataAuth, setAuth } = props;

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const usernameRef = useRef();

    
    const responseFacebook = (res) => {
        const data = {
            isLogin: true,
            userID: res.id,
            name: res.name,
            email: res.email
        }

        setAuth(data);
    };
    
    const responseGoogle = (response) => {
        const data = {
            isLogin: true,
            userID: response.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email
        }

        setAuth(data);
    }
    
    const onSubmitLogin = () => {
        if(!isEmpty(username) && !isEmpty(password)) {
            const data = {
                isLogin: true,
                userID: "1234567",
                name: username,
                email: username + '@email.com'
            }

            setAuth(data);
        } else {
            usernameRef.current.focus();
            
        }
    };

    if(!dataAuth.isLogin) {
        
        return (
            <div className="c-login">
                <Helmet>
                    <title>Sign In Page - Store Apps</title>
                    <meta
                    name="description"
                    content="A React.js Boilerplate application homepage storeApps | SignIn page"
                    />
                </Helmet>
                <div className="c-login__panel">
                    <h3 className="c-login__heading">Store | <span>LOGIN </span></h3>
                    <input 
                        ref={usernameRef}
                        type="text"
                        className="c-login__input-control"
                        placeholder="Username ..."
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input 
                        type="password"
                        className="c-login__input-control"
                        placeholder="Password ..."
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    
                    <div className="row c-login__diver align-items-center justify-content-between">
                        <div className="col-auto">
                            <label>
                                <input type="checkbox" value='1' name="remember" className="mr-1" />
                                Remember me
                            </label>
                        </div>
                        <div className="col-auto">
                            <button 
                                className="c-login__btn" 
                                type="button"
                                onClick={onSubmitLogin}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
    
                    <div className="row mt-4">
                        <div className="col-12 mb-2">
                            <FacebookLogin
                                appId="191204008947455"
                                fields="name,email,picture"
                                cssClass="c-login__btn-social c-login__btn-social--fb"
                                callback={responseFacebook} 
                                autoLoad={false}
                                isMobile={true}
                            />
                        </div>
                        <div className="col-12">
                            <GoogleLogin
                                clientId="194676773038-0baatdc11vnhe8moe7fn51d0v5g4j5pd.apps.googleusercontent.com"
                                buttonText="Sign In with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                icon={false}
                                className="c-login__btn-social c-login__btn-social--gl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
        
    } else {
        return <Redirect to={'/'} />
    }

    
};

const mapStateToProps = state => {
    return {
      dataAuth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    setAuth: (data) => { dispatch(setUserAuth(data)) }
});
  
Login.propTypes = {
    dataAuth: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);