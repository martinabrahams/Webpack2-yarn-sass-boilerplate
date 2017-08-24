# Webpack 2 - Yarn - Sass - ES6 Boilerplate

This is a Webpack 2, ES6 & PostCSS boilerplate that utilizes some of the latest open source tools around such as:

* [Node.js](https://github.com/nodejs/node)
* [Yarn](https://github.com/yarnpkg)
* [Webpack 2](https://github.com/webpack/webpack)
* [TypeScript](https://github.com/Microsoft/TypeScript) (TypeScript + ES6) transpiling
* [PostCSS](https://github.com/postcss/postcss) w/ [cssnext](https://github.com/MoOx/postcss-cssnext)
* [Scss](https://github.com/sass/sass)
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

After running `yarn dev` in the project root, your `/src` code will be served at the url above and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/repo
yarn dev
```

### building for production
Use `yarn build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/repo
yarn build
```

## features you may want to remove

### Sass

This project uses Sass (.scss), if you prefer .sass, use the sass format (and extention) instead changing all references to .scss -> .sass in `webpack.config.dev` and `webpack.config.prod`
