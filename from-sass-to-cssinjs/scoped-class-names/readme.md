## Scoped class names

Currently CSS has no standardized and well supported way to scope class names. By default CSS selectors have one global namespace. This works fine as long as the code base is small, but when it grows and more than one person works on it, it becomes increasingly hard to manage selectors. This is the reason why many naming conventions like BEM, SMACSS, OOCSS  have been created.

We will learn how to make sure our class names have no collisions without using a naming conventions. Also we will create our own CSS-in-JS library.

[Playground](https://codesandbox.io/s/github/cssinjs/egghead/tree/master/from-sass-to-cssinjs/scoped-class-names)
