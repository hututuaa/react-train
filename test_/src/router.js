import Popular from './pages/Popular/index.js';
import Battle from './pages/Battle/index.js';
import React from 'react';
import Result from './pages/Battle/result'
import { Route,Redirect,withRouter } from 'react-router-dom';

class RouterComponent extends React.Component {
    render() {
        return (
            <div>
                <Redirect to = "/popular"/>
                <Route path = "/popular" exact component={Popular} />
                <Route path = "/battle"  exact component={Battle} />
                <Route path = '/battle/result' component={Result}/>
            </div>
        )
    }
}


export default withRouter(RouterComponent)