const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass'))
      concat = require('gulp-concat');

gulp.task('scss', () => {
  return gulp
    .src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('assets'));
});

gulp.task('default', gulp.series('scss'));
