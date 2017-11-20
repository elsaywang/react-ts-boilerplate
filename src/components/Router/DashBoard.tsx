import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { Provider } from "react-redux";
import routes from "./App";
import RouteWithSubRoutes from "./RouteWithSub";


export default function DashboardContainer (props) { // eslint-disable-line no-unused-vars
    return (
        //<Provider store={createStore(Reducer, applyMiddleware(Thunk))}>
            <Router>
                <Dashboard/>
            </Router>
        //</Provider>
    );
}

export function Dashboard(props) { // eslint-disable-line no-unused-vars
    return (
        <div className="dashboard">
            <nav>
                <ul className="list-group list-group-nav list-group-nav-large-icon">
                    <NavLink exact activeClassName="active-route" to="/">
                        <li className="list-group-item">
                            <i className="icon icon-s4"></i>
                            <span className="menu-text-small">Home</span>
                        </li>
                    </NavLink>

                    <NavLink exact activeClassName="active-route" to="/Memeber">
                        <li className="list-group-item">
                            <i className="icon icon-s4"></i>
                            <span className="menu-text-small">Memeber</span>
                        </li>
                    </NavLink>
                    {/*
                    <NavLink exact activeClassName="active-route" to="/resources">
                        <li className="list-group-item icon-vertical">
                            <i className="icon ui-kit-mail icon-s4"></i>
                            <span className="menu-text-small">Resources</span>
                        </li>
                    </NavLink>
                    */}
                </ul>
            </nav>
            <main>
                {routes.map((route, index) => (
                    <RouteWithSubRoutes key={index} {...route}/>
                ))}
            </main>
        </div>
    );
}
