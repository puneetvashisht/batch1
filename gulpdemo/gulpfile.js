var gulp = require('gulp');
var gulpUtil = require('gulp-util')
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('public/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copyhtml', function(){
    gulpUtil.log('Copy Html task');
  gulp.src('public/**/*.html').pipe(gulp.dest('./dist'))
    
})

gulp.task('watch', function(){
    gulp.watch('public/**/*.js', ['jshint']);
})