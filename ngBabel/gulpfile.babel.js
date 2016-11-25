import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

import del from 'del';

const app = 'src/';
const dist = 'build';
const bootstrap_file = 'main.js';

gulp.task('copy', () => {
  return gulp.src([app + 'index.html'])
    .pipe(gulp.dest(dist));
});

gulp.task('build', ['copy'], () => {
  const b = browserify(app + bootstrap_file, { debug: true })
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify(app + bootstrap_file, Object.assign({}, { debug: true }, watchify.args))
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del(dist);
});

gulp.task('default', ['copy', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist));
}
