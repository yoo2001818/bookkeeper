var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var apidoc = require('gulp-apidoc');

// TODO: Add code coverage tool

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint']);

gulp.task('apidoc', function(done) {
  apidoc({
    src: 'src/',
    dest: 'apidoc/'
  }, done);
});

gulp.task('babel', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['babel', 'apidoc']);
