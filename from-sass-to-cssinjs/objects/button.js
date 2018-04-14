import {buttonSize, boxShadow} from './mixins'
import {textColor, backgroundColor} from './variables'

const css = {
  '.cssinjs-btn': {
    color: textColor,
    background: backgroundColor
  }
}

const toCssString = css => {
  let result = ''
  for (const selector in css) {
    result += selector + ' {' // .cssinjs-btn {
    for (const property in css[selector]) {
      // color: white;
      result += property + ': ' + css[selector][property] + ';'
    }
    result += '}'
  }
  return result
}

// Render styles.
document.head.appendChild(
  document.createElement('style')
).textContent = toCssString(css)
