import view from "./views/index.html?raw";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { evalTemplate } from "./utils";

export default (): any => {
  const div = document.createElement("div");

  div.innerHTML = evalTemplate(view, { typescriptLogo });

  const btn = div.querySelector<HTMLButtonElement>("#counter");

  if (btn != null) setupCounter(btn);

  return div;
};
