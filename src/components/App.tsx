import * as React from 'react';
import { Link } from 'react-router';
import '../css/honeycomb.scss';
import './app.scss';
const AppLogo = require('../images/gatebase-white.svg');

class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return <div>
            <div className="band header--primary">
                <nav>
                    <Link to="/" className="header--primary__app-logo-container">
                        <img src={AppLogo} className="js-svg" width="25" />
                    </Link>
                    <Link to="/" className="header--primary__app-name-container">
                        Redgate React Starter Kit
                    </Link>
                </nav>
            </div>

            <div role="main">
                {this.props.children}
            </div>

            <footer>
                Copyright 1999 - 2017 Red Gate Software Ltd
            </footer>
        </div>;
    }
}

export default App;
