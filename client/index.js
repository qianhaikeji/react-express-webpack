import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import routes from './routes'
import './styles/public.css'

const store = configureStore();

render(
    <Provider>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)
