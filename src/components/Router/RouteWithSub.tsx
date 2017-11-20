import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes : React.StatelessComponent<{}> = (route:any) => (
    <Route path={route.path} exact={route.exact} render={props => (
        // pass the sub-routes down to keep nesting
        <route.main {...props} routes={route.sub}/>
    )}/>
);

export default RouteWithSubRoutes;
