const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass'));

gulp.task('scss', () => {
  return gulp
    .src('./src/scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('assets'));
});

gulp.task('default', gulp.series('scss'));
