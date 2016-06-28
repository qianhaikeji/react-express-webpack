import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import routes from './routes'
import DevTools from './containers/DevTools'
import './styles/public.css'
import './styles/base.css'
import 'antd/dist/antd.css'

const store = configureStore();

if (__DEBUG__) {
    setTimeout(() => render(
      <DevTools store={store} />,
      window.document.body.appendChild(document.createElement('div'))
    ), 10)
}

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)
