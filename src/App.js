import React, {Component} from 'react';
import {Switch, Route, Redirect,BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import LoginPage from "./LoginPage"
import PrivatePage from "./PrivatePage";

class App extends Component {
    render() {
        const { userSignup, userLogin,userLogout, errorMessage} = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Router>

                    <Route path="/home" render={(props) =>
                        <PrivatePage {...props}
                                     logout={userLogout()}
                        />
                    }/>

                    <Route path="/login" render={(props) =>
                        <LoginPage {...props}
                                   userSignup={userSignup}
                                   userLogin={userLogin}
                                   errorMessage={errorMessage}
                        />}
                    />
                </Router>
                {this.redirectPage()}
            </div>
        )

    }

    redirectPage() {
        console.log(this.props.isAuthenticated)
        if(this.props.isAuthenticated){
            return <Redirect to="/home"  />
        }else {
            return <Redirect to="/login"  />
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.isAuthenticated,
        errorMessage: state.errorMessage
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userLogin: (username, password) => {
            dispatch({type: "USER_LOGIN", payload: {username, password}})
        },
        userSignup: (username, password) => {
            dispatch({type: "USER_SIGNUP", payload: {username, password}})
        },
        userLogout: () => {
            dispatch({type: "USER_LOGOUT"})
        },
    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default ConnectedApp;






