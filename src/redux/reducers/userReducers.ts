import { AnyAction } from 'redux';

import { userState } from '../types/reducersStates';
import { userTypes } from '../types/actionsTypes';

const initialState: userState = {
    username: '',
    githubData: {
        name: '',
        bio: ''
    }
};

export default function userReducers(state = initialState, action: AnyAction) {
    
    switch(action.type){

        case userTypes.SET_USER:
            return {
                ...state,
                username: action.payload
            }

        case userTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                githubData: action.payload
            }

        case userTypes.FETCH_USER_FAILED:
            return {
                ...state,
                username: '',
            }

        default:
            return state;
    }
}
