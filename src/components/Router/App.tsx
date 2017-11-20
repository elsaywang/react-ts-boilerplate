import React from "react";
import { NavLink } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSub";
import About from '../App/About';
import MembersPage from '../App/MembersPage';

export const ResourceViewNavigation : React.StatelessComponent<{}> = ({routes}) => (
    <div>
        <ul className="nav nav-pills">
            <li role="presentation"><NavLink to="/About">About</NavLink></li>
          <li role="presentation"><NavLink to="/Member">Memeber</NavLink></li>*/}
        </ul>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
);

export default [
    {
        path: '/',
        exact: true,
        main: () => <About/>
    },
    {
        path: '/Memeber',
        main: () => <MembersPage/>
    }
    /*{
        path: '/resources',
        main: ResourceViewNavigation,
        sub: [
            {
                path: '/resources/opportunity',
                main: () => <OpportunityDetail/>
            },
            {
                path: '/resources/detail',
                main: () => <OlympusResource/>
            },
            {
                path: '/resources/resourcesforOpportunity',
                main: () => <ResourceListOfOpportunity/>
            },
            {
                path: '/resources/inventory/san',
                main: () => <SANInventory/>
            }
        ]
    }*/
];
