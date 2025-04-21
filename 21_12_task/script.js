let knowsHtml = true;
let knowsCss = true;
let knowsBootstrap = true;
let knowsJs = false;
let knowsReact = false;
let knowsNode = false;

let rootMap =
  knowsHtml &&
  knowsCss &&
  knowsBootstrap &&
  !knowsJs &&
  !knowsReact &&
  !knowsNode
    ? "Then he becomes UI/UX DESIGNER"
    : knowsHtml &&
      knowsCss &&
      knowsBootstrap &&
      knowsJs &&
      knowsReact &&
      !knowsNode
    ? "Then he becomes frontend developer "
    : knowsHtml &&
      knowsCss &&
      knowsBootstrap &&
      !knowsJs &&
      !knowsReact &&
      !knowsNode
    ? " Then He Becomes Backend Developer"
    : knowsHtml &&
      knowsCss &&
      knowsBootstrap &&
      knowsJs &&
      knowsReact &&
      knowsNode
    ? " Then He Becomes Fullstack Developer"
    : "Go And Join 10000 Coders";

console.log(rootMap);