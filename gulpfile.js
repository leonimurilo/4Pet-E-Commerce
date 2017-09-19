const gulp = require("gulp");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const watchify = require("watchify");
const babel = require("babelify");
const source = require("vinyl-source-stream");
const fs = require('fs');

const appPath = "client/src/app.js";
const distPath = "./client/public/dist";
const bundleName = "bundle.js";

function compile(watch) {
    let bundler = watchify(browserify({ entries: appPath}).transform(babel));

    if (!fs.existsSync("./client/public/dist")){
        fs.mkdirSync("./client/public/dist");
    }

    function rebundle() {
        bundler.bundle()
            .on("error", function(err) { console.error(err); this.emit("end"); })
            .pipe(source(bundleName))
            .pipe(buffer())
            .pipe(gulp.dest(distPath));
        console.log("Build finished!");
    }

    if (watch) {
        bundler.on("update", function() {
            console.log("Building...");
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task("build", function() { return compile(); });
gulp.task("watch", function() { return watch(); });

gulp.task("default", ["build"]);