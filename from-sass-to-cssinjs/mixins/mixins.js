export const buttonSize = (paddingY, paddingX, fontSize, borderRadius) => `
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};
  border-radius: ${borderRadius.split("")[0] * 10 + "px"};
`;
