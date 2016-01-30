var gulp  = require('gulp');
var serve = require('gulp-serve');
var sass  = require('gulp-sass');

gulp.task('serve', serve('public'));
gulp.task('sass',function(){
    gulp.src('./sass/**/*.scss')
          .pipe(sass().on('error',sass.logError))
          .pipe(gulp.dest('./public/css'));
})