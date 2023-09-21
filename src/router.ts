import index from "./index";
import about from "./about";

export const route = (event: MouseEvent): void => {
  event.preventDefault();
  window.history.pushState({}, "", (event.target as HTMLAnchorElement).href);
  handleLocation();
};

const routes: Record<string, any> = {
  404: "",
  "/": index,
  "/about": about,
  "/lorem": ""
};

export const handleLocation = (): void => {
  const path = window.location.pathname;
  const route = routes[path] ?? routes[404];
  const appEl = document.getElementById("app");

  if (appEl != null) {
    appEl.innerHTML = "";
    appEl.appendChild(route());
  }
};
