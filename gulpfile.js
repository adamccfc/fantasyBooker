var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  // place code for your default task here
});

// Sass task
gulp.task('styles', function() {
  return sass('public/css/scss/*.scss', { style: 'expanded' })
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

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('public/css/**/*.scss', ['styles']);
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('views/**/*.jade', ['templates']);
});

// gulp.task('server',function(){
//   nodemon({
//     'script': 'app.js',
//     'ignore': 'public/js/*.js'
//   });
// });

gulp.task('serve', ['watch']);