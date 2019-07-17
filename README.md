# Wordpress CSS manager

This is a CSS manager to use with Wordpress, this allows split your CSS file in many files and build them in a single file.

You can work with `CSS` or `SCSS` (SASS) files.

## How to use
- Install `Node JS` version `12.6.0`, you can use [NVM](https://github.com/nvm-sh/nvm)
- Unzip this package in the document root of your Wordpress
- Run `npm i`
- Set config vars in `.env` file
- Run `npm run build`

## Work with CSS files
- Just configure the `# CSS configuration` vars in `.env` file

## Work with SASS
- Just configure the `# SASS configuration` vars in `.env` file, uncomment the `watch(process.env.WATCH_SASS_URL, sass);` line in `gulpfile.js` and comment `watch(process.env.WATCH_CSS_URL, css);`
