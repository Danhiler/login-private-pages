import {fork, take, call, put} from "redux-saga/effects";
import api from './api'

function* RegistarSaga() {
    while (true) {
        const {payload} = yield take("USER_SIGNUP")
        const wasSuccessful = yield call(api.userSignup, payload)
        if (wasSuccessful) {
            yield put({type: "LOGIN_SUCCESSFUL"})
        }
    }
}

function* LoginSaga() {
    while (true) {
        const {payload} = yield take("USER_LOGIN")
        const wasSuccessful = yield call(api.userLogin, payload)
        if (wasSuccessful.length>0) {
            yield put({type: "LOGIN_SUCCESSFUL"});
        } else {
            yield put({type: "LOGIN_FAILED"});
        }
    }
}


function* LogoutSaga() {
    while (true) {
        yield take("USER_LOGOUT")
        yield put({type: "USER_LOGOUT"})
    }
}

export default function* defaultSaga() {
    yield [
        fork(RegistarSaga),
        fork(LoginSaga),
        fork(LogoutSaga)
    ]
}