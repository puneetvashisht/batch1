var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
var appDev = 'morets';

//npm install --save-dev gulp gulp-typescript gulp-sourcemaps gulp-tslint del

gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

gulp.task('tslint', function () {
    return gulp.src(appDev + "/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});


gulp.task("compile", function () {
    var tsResult = gulp.src(appDev + "/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task('watch', function(){
    gulp.watch(appDev + "/**/*.ts", ['compile'])
})





