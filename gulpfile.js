const { src, dest, watch, series, parallel } = require('gulp')
const exec = require('gulp-exec')

// const sourcemaps = require('gulp-sourcemaps');
// const browserSync = require('browser-sync').create()
const fs = require('fs')

const jsFiles = 'src/**/*.mjs'

// browserSync.init({
//     server: {
//         baseDir: "./build",
//     }
// });

function jsTask(){
    return src(jsFiles)
    // .pipe(exec('npx webpack --config webpack.config.js')) // Put everything in the build directory
    .pipe(dest('build')) // Put everything in the build directory
    // .pipe(browserSync.stream())
}


function watchTask() {
    // Watch for changes in any SCSS or JS files, and run the scssTask,
    // jsTask, and preventCachingTask functions whenever there is a change.
    watch(
        [jsFiles],
        series(
            jsTask
        )
    );
}

// Export everything to run when you run 'gulp'
module.exports = {
    // node_modulesTask,
    default: series(
        jsTask,
        watchTask
    )
  };