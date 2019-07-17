const { src, dest, watch } = require('gulp');
const gulpSass = require('gulp-sass');
const concat = require('gulp-concat');
require('dotenv').config();

const sass = () => src(process.env.SASS_URL)
  .pipe(gulpSass())
  .pipe(dest(process.env.SASS_OUTPUT_FOLDER));

const css = () => src(process.env.CSS_URL)
  .pipe(concat(process.env.CSS_OUTPUT_FILE_NAME))
  .pipe(dest(process.env.CSS_OUTPUT_FOLDER));

exports.default = function() {
  // Enable work with SASS
  // watch(process.env.WATCH_SASS_URL, sass);
  // Enable work with CSS files
  watch(process.env.WATCH_CSS_URL, css);
};

