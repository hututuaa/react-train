import Popular from '@/pages/Popular/index.js';
import Battle from '@/pages/Battle/index.js';
import React from 'react';
import Result from '@/pages/Battle/result'
import { Route,Redirect,withRouter, Switch } from 'react-router-dom';

class RouterComponent extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Redirect to = "/popular"/> */}
                <Route path = "/popular" exact component={Popular} />
                <Route path = "/battle"  exact component={Battle} />
                <Route path = '/battle/result' component={Result}/>
                 <Redirect to = "/popular"/>
            </Switch>
        )
    }
}


export default withRouter(RouterComponent)