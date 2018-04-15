import {buttonSize, boxShadow} from './mixins'
import {textColor, backgroundColor} from './variables'

const css = {
  '.cssinjs-btn': {
    color: textColor,
    background: backgroundColor,
    ...buttonSize(),
    ...boxShadow('0px 4px 5px #666', '2px 6px 10px #999')
  }
}

console.log(css)

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
