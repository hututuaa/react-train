import Popular from './pages/Popular/index';
import Battle from './pages/Battle/index';
import React from 'react';
import { Route,Redirect } from 'react-router-dom';


class RouterComponent extends React.Component {
    render() {
        return (
            <div>
                <Redirect to="/popular"/>
                <Route path="/popular" exact component={Popular} />
                <Route path="/battle" component={Battle} />
            </div>
        )
    }
}


export default RouterComponent