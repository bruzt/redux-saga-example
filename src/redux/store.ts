import { createStore, combineReducers, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store: Store;

if(process.env.NODE_ENV === 'development' && process.browser){

    //@ts-ignore
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    
    store = createStore(
        rootReducer, 
        compose(applyMiddleware(sagaMiddleware), devTools)
    );

} else {

    store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware))
    );
}

sagaMiddleware.run(rootSaga);

export default store;
