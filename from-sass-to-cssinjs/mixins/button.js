import {
  paddingYLg,
  paddingXLg,
  fontSizeLg,
  borderRadiusLg
} from "./variables"
import { buttonSize } from "./mixins"

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize(paddingYLg, paddingXLg, fontSizeLg, borderRadiusLg)};
  }
`

// Render styles.
document.head.appendChild(
  document.createElement("style")
).textContent = css