"use strict";

const nunjucks = require("gulp-nunjucks");
var browserSync = require("browser-sync").create();
const terser = require("gulp-terser");
const concat = require("gulp-concat");

const buildNunjucks = () =>
  gulp.src("templates/*.njk").pipe(nunjucks.compile()).pipe(gulp.dest("www"));

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./www/css"));
}

function jsTask() {
  return gulp
    .src("./assets/js/*.js")
    .pipe(concat("index.js"))
    .pipe(terser())
    .pipe(gulp.dest("./www/js"));
}

function browsersyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "./www/",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask(cb) {
  gulp.watch(
    [
      "./assets/scss/*.scss",
      "./assets/scss/**/*.scss",
      "templates/**/*.njk",
      "templates/*.njk",
    ],
    gulp.series(buildStyles, buildNunjucks, browsersyncReload)
  );
  cb();
}

exports.default = gulp.series(
  buildStyles,
  jsTask,
  buildNunjucks,
  browsersyncServe,
  watchTask
);
