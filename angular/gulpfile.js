var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
var appDev = '02states';

gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

gulp.task("resources", function () {
    return gulp.src([appDev + "/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

gulp.task("compile", function () {
    var tsResult = gulp.src(appDev + "/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task('watch', function () {
    gulp.watch([appDev + "/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch([appDev + "/**/*.html", appDev + "/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task("libs", function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'bootstrap/dist/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task("default", ['compile', 'resources', 'libs'])