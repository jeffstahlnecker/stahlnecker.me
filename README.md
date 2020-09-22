# Gatsby Stahlnecker Starter

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Utility Classes in Styles.js](#utility-classes-in-stylesjs)
  - [How to use the utility classes](#how-to-use-the-utility-classes)
  - [Index of Utility Classes](#index-of-utility-classes)
- [File Tree](#file-tree)

## Introduction

This starter brings all of my personal gatsby preferences to the table. I like to have tested code, with decent code coverage. I'm always going to use images, sitemaps, and access system files. I'm also a huge fan of styled components, and have a general Styles.js file to simplify styling.

## Key Features

- Styles.js filled with utility classes
- Pre commit formatting, eslint and testing to ensure your code functions before it's sent to the CI
- ESLint configured with Prettier, mostly following the [AirBnB Style Guide](https://github.com/airbnb/javascript) (This won't require you to use `.jsx` for all files including jsx)
- Fully functional [Jest](https://jestjs.io/)
- [@testing-library/react](https://github.com/testing-library/react-testing-library) by Kent C. Dodds

To accomplish this, this starter includes:

- Gatsby React Helmet
- Gatsby Image (Gatsby Transformer Sharp, Gatsby Plugin Sharp)
- Gatsby Plugin Sitemap
- Gatsby Styled Components\
  ... and a number of other tools that you can find in the [package.json](./package.json)

## Utility Classes in Styles.js

Styled components are amazing. As part of this we can create utility classes, or css functions containing commonly used css patterns. For example:

```
export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x};`
}
```

This bit allows us to easily add and customize FlexBox to an element without having to type everything out. Saving us keystrokes.

Another useful tool is `setRem()`

```
export const setRem = (number = 16) => {
  return `${number / 16}rem`
}
```

`setRem()` provides us with an easy way to convert pixels to rem.

### How to use the utility classes

First you need to import the specific classes you want to use from Styles.js.

```
import {setRem, setTransition, setFlex} from 'styles.js';
```

Then you can call these in your styled components.

```
const Example = styled.div`
  ${setFlex()};
  ${setTransition()};
  padding: ${setRem(10) ${setRem(5)}
`;
```

### Index of Utility Classes

-- _Coming Soon_ --

## File Tree

-- _Coming Soon_ --
