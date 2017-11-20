import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {render} from "react-dom";
import HelloComponent  from "./components/App/Hello";
import "../styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
	render(<HelloComponent/>, document.querySelector("#app"));
});
