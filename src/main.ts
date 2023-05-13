import "./style.css";
import { route, handleLocation } from "./router";

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
