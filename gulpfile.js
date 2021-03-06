var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

// Copy bootstrap css
gulp.task('bootstrap', function() {
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
  .pipe(gulp.dest('./public/css'));
});

// Font Awesome
gulp.task('fonts', function() {
  gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('./public/fonts'));
});

// Sass task
gulp.task('styles', function() {
  return sass('app/scss/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

// JS task
gulp.task('scripts', function() {
  return gulp.src('public/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});

// Jade livereload
gulp.task('templates', function() {
  return gulp.src('views/**/*.jade')
    .pipe(livereload());
});

// Watch task
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/scss/**/*.scss', ['styles']);
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('views/**/*.jade', ['templates']);
});

// gulp.task('server',function(){
//   nodemon({
//     'script': 'app.js',
//     'ignore': 'public/js/*.js'
//   });
// });

gulp.task('serve', ['bootstrap', 'fonts', 'watch']);