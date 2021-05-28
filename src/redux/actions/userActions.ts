import Router from 'next/router';

import { userTypes } from '../types/actionsTypes';

export const setUsername = (username: string) => {

    return {
        type: userTypes.SET_USER,
        payload: username
    }
}

export const setUserData = (githubData: {}) => {

    Router.push('/user');

    return {
        type: userTypes.FETCH_USER_SUCCESS,
        payload: githubData
    }
}


export const failedUserData = (error: Error) => {

    return {
        type: userTypes.FETCH_USER_FAILED,
        payload: error
    }
}
