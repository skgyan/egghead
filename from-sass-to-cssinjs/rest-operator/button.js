import { buttonSize, boxShadow } from "./mixins"

const css = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
    margin: 5px;
    ${buttonSize()}
    ${boxShadow('0px 4px 5px #666', '2px 6px 10px #999')}
  }
`

// Render styles.
document.head.appendChild(
  document.createElement("style")
).textContent = css
