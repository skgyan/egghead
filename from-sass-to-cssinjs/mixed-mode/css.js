let counter = 0;

export default styles => {
  const classes = {};
  let cssString = "";
  for (const name in styles) {
    classes[name] = name + "-" + counter++;
    const selector = "." + classes[name];
    cssString += selector + " {"; // .cssInJsBtn-0 {
    if (typeof styles[name] === "string") {
      cssString += styles[name];
    } else {
      for (const property in styles[name]) {
        // color: white;
        cssString += property + ": " + styles[name][property] + ";";
      }
    }
    cssString += "}";
  }

  // Render styles.
  document.head.appendChild(
    document.createElement("style")
  ).textContent = cssString;

  return classes;
};
