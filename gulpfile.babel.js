import gulp from 'gulp';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import less from 'gulp-less';

// all CSS files for the application
var vendorCssFiles = [
  'public/vendor/fontawesome/css/font-awesome.css',
  'public/vendor/bootstrap/dist/css/bootstrap.css',
];

var appScssFiles = [
  'public/css/less/layout.less'
];

// font awesome and bootstrap glyphicons
var fontfiles = [
  'public/vendor/fontawesome/fonts/*',
  'public/vendor/bootstrap/fonts/*'
];

gulp.task('install', () => {
  gulp.src(vendorCssFiles)
  .pipe(concat('vendor.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/css/'));

  gulp.src(appScssFiles)
  .pipe(less())
  .pipe(concat('app.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/css/'));

});
