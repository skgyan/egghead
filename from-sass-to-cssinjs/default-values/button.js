import { buttonSize } from "./mixins"

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize()};
  }
`

// Render styles.
document.head.appendChild(
  document.createElement("style")
).textContent = css
