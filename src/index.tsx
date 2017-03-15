// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

ReactDom.render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
);
