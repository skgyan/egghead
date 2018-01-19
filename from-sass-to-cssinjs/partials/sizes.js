import {
  paddingY, paddingX, baseFontSize, borderRadius
} from './variables'

export const lg = `
  .cssinjs-btn-lg {
    padding: ${paddingY} ${paddingX};
    font-size: ${baseFontSize};
    border-radius: ${borderRadius};
  }
`
export const sm = `
  .cssinjs-btn-lg {
    padding: ${paddingY / 2} ${paddingX / 2};
    font-size: ${baseFontSize / 2};
    border-radius: ${borderRadius / 2};
  }
`
export default lg + sm
