import view from "./views/about.html?raw";

export default (): any => {
  const div = document.createElement("div");

  div.innerHTML = view;

  return div;
};
