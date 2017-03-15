// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default <Route path="/" component={App}>
    <IndexRoute component={Home} />
</Route>;
