import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {render} from "react-dom";
import  DashboardContainer from "./components/Router/Dashboard";
import "../styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
	render(<DashboardContainer />, document.querySelector("#app"));
});
