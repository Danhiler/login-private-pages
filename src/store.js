import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga.js'

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    isAuthenticated:true,
    errorMessage:""
};

function appReducer(state,action){
    switch(action.type){
        case "LOGIN_SUCCESSFUL":
            return {isAuthenticated:true}
        case "LOGIN_FAILED":
            return{errorMessage:"Username or Password are incorrect"}
        case "USER_LOGOUT":
            return {isAuthenticated:false}
        default:
            return {...state}
}

}
const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

export default store