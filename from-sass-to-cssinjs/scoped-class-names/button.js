import {buttonSize, boxShadow} from './mixins'
import {textColor, backgroundColor} from './variables'
import css from './css'

const classes = css({
  cssInJsBtn: {
    color: textColor,
    background: backgroundColor,
    ...buttonSize(),
    ...boxShadow('0px 4px 5px #666', '2px 6px 10px #999')
  }
})

document.body.innerHTML = `
  <button class="${classes.cssInJsBtn}">CSSinJS Button</button>
`
