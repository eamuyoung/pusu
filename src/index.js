import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import persistorstore from './store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const {persistor,store} = persistorstore()
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>
    ,document.getElementById('app'));