import {
  paddingYLg,
  paddingXLg,
  fontSizeLg,
  borderRadiusLg
} from "./variables"

export const buttonSize = ({
  paddingY = paddingYLg,
  paddingX = paddingXLg,
  fontSize = fontSizeLg,
  borderRadius = borderRadiusLg
} = {}) => `
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};
  border-radius: ${borderRadius};
`
