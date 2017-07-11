"use strict";

const child = require("child_process");
const gulp = require("gulp");
const exec = require("gulp-exec");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const del = require("del");
const sequence = require("run-sequence");
const buffer = require("vinyl-buffer");

gulp.task("clean", () => {
    return del(["wp/wp-content/themes/neupress/assets"]);
});

gulp.task("build:sass", () => {
    return gulp.src("wp/wp-content/themes/neupress/src/stylesheets/main.scss")
        .pipe(sass({ style: "expanded" }).on('error', sass.logError))
        .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(minifycss())
        .pipe(gulp.dest("wp/wp-content/themes/neupress/assets/stylesheets"));
});

gulp.task("build:js", () => {
    return gulp.src("wp/wp-content/themes/neupress/src/scripts/**/*.js")
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("wp/wp-content/themes/neupress/assets/scripts"));
});

gulp.task("build:images", () => {
  return gulp.src("wp/wp-content/themes/neupress/src/images/*")
    .pipe(gulp.dest("wp/wp-content/themes/neupress/assets/images"));
});

gulp.task("build:fonts", () => {
  return gulp.src("wp/wp-content/themes/neupress/src/fonts/*")
    .pipe(gulp.dest("wp/wp-content/themes/neupress/assets/fonts"));
});

gulp.task("watch", () => {
 gulp.watch("wp/wp-content/themes/neupress/src/stylesheets/**/*.scss", ["build:sass"]);
 gulp.watch("wp/wp-content/themes/neupress/src/scripts/**/*.js", ["build:js"]);
 gulp.watch("wp/wp-content/themes/neupress/src/images/*", ["build:images"]);
 gulp.watch("wp/wp-content/themes/neupress/src/fonts/*", ["build:fonts"]);
});

gulp.task("db:export", () => {
  const paths = __dirname.split("/");
  const containerName = paths[paths.length - 1] + "_mysql_1";
  const options = {
    continueOnError: false,
    pipeStdout: false
  };
  const reportOptions = {
  	err: true,
  	stderr: true,
  	stdout: true
  };
  return gulp.src(".")
    .pipe(exec("sudo docker exec " + containerName + " /bin/bash -c 'mysqldump -u root -password wordpress > /var/lib/mysql/current_db.sql'", options))
    .pipe(exec.reporter(reportOptions))
    .pipe(exec("sudo mv ./data/current_db.sql ./current_db.sql", options))
    .pipe(exec.reporter(reportOptions))
    .pipe(exec("git add ./current_db.sql", options))
    .pipe(exec.reporter(reportOptions))
    .pipe(exec("git commit -m 'Exported database'", options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task("db:import", () => {
  const paths = __dirname.split("/");
  const containerName = paths[paths.length - 1] + "_mysql_1";
  const options = {
    continueOnError: false,
    pipeStdout: false
  };
  const reportOptions = {
  	err: true,
  	stderr: true,
  	stdout: true
  };
  return gulp.src(".")
    .pipe(exec("sudo cp ./current_db.sql ./data/current_db.sql", options))
    .pipe(exec.reporter(reportOptions))
    .pipe(exec("sudo docker exec " + containerName + " /bin/bash -c 'mysql -u root -password wordpress < /var/lib/mysql/current_db.sql'", options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task("start", () => {
  const options = {
    continueOnError: false,
    pipeStdout: false
  };
  const reportOptions = {
  	err: true,
  	stderr: true,
  	stdout: true
  };
  return gulp.src(".")
    .pipe(exec("sudo docker-compose up -d --build", options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task("default", (done) => {
    return sequence("clean", ["build:sass", "build:js", "build:images", "build:fonts"], ["start"], ["watch"], done);
});
