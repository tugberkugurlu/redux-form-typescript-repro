// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import initialState from './core/reducers/initialState';
import configureStore from './core/store/configureStore';
import routes from './routes';

const store = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
