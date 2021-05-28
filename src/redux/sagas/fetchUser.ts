import { call, put, select } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import api from "../../services/api";
import { setUserData, failedUserData } from '../actions/userActions';
import { storeState } from '../types/reducersStates';

export default function* fetchUser(){

    try {
        
        const username: string = yield select((state: storeState) => state.user.username);
        
        const response: AxiosResponse<any> = yield call(api.get, `/users/${username}`);

        yield put(setUserData(response.data));
        
    } catch (error) {

        yield put(failedUserData(error));
    }
}
