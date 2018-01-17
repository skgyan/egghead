import {
  paddingY, paddingX, baseFontSize, borderRadius
} from './variables'

const button = `
  .cssinjs-btn {
    padding: ${paddingY} ${paddingX};
    font-size: ${baseFontSize};
    border-radius: ${borderRadius};
    color: #fff;
    background-color: green;
  }
`

// Render styles.
document.head.appendChild(
  document.createElement('style')
).textContent = button
