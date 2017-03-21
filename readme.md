# Webpack 2 - Yarn - Sass - ES6 Boilerplate

This is a Webpack 2, ES6 & PostCSS boilerplate that utilizes some of the latest open source tools around such as:

* [Node.js](https://github.com/nodejs/node)
* [Yarn](https://github.com/yarnpkg)
* [Webpack 2](https://github.com/webpack/webpack)
* [Babel](https://github.com/babel/babel) (ES6) transpiling
* [ESLint](https://github.com/eslint/eslint) for linting
* [PostCSS](https://github.com/postcss/postcss) w/ [cssnext](https://github.com/MoOx/postcss-cssnext)
* [Sass](https://github.com/sass/sass)
* ...and more

This boilerplate is intended to be small in scope so that it can be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with Webpack 2.

## license
This boilerplate is fully open source and public domain, so you are free to do whatever you wish with it -- commercially or personally.

## getting started
After completing the steps below, you will be ready to begin using Starbase:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Install [Yarn](https://yarnpkg.com)
3. Clone this repository into your project root directory
4. Install dependencies by running `yarn` in your project root directory

_Note: if you hate Yarn for some reason, you can skip Step 2 and use `npm install` instead  of `yarn` in Step 4._

## building, watching & developing

### local development
This boilerplate uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to serve up your project at [http://localhost:8080](http://localhost:8080) for streamlined and convenient development.

After running `yarn run dev` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/repo
yarn run dev
```

### building for production
Use `yarn run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/repo
yarn run build
```

## features you may want to remove

### Sass

This project uses Sass, if you prefer Less or just plain old css you can remve it from the project.

1. Change `test: /\.sass$/` in both `/webpack/webpack.config.prod.js` and `/webpack/webpack.config.dev.js` to `test: /\.css$/` or your choice of file extension.
2. Remove `sass-loader` from both `/webpack/webpack.config.prod.js` and `/webpack/webpack.config.dev.js`
3. Run `yarn remove node-sass sass-loader` dependency from `/package.json`

## features you may want to customize

### javascript linting

This project uses [ESLint](http://eslint.org/) for Javascript (ES6) linting. The config (`/.eslintrc`) included out of the box is very basic and does not contain many rules. I recommend modifying this to your liking. Check out [the official docs](http://eslint.org/docs/2.0.0/rules/) for more information.
