var promise = require('es6-promise');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var bower        = require('gulp-bower');
var runSequence  = require('run-sequence');
var clean        = require('gulp-clean');
var chmod        = require('gulp-chmod');
var autoprefixerOptions = {
  browsers: ['last 1 version']
};
var processors = [
  autoprefixer(autoprefixerOptions),
];

/* Directories */
var styleCustomSass = './assets/sass/**/*.scss';
var fontsAwesome = './assets/sass';
var outputCss = './css';
var bowerComponents = './bower_components/';
var assetLibraries = './assets/libraries/';
var bootstrapSass = './bootstrap-sass/';
promise.polyfill();

/*gulp.task('bower', function(callback) {
  runSequence(
    'run-bower',
    ['bootstrap', 'fonts-awesome', 'jquery', 'freewall', 'semantic'],
    callback
  );
});*/

gulp.task('bower', function(callback) {
  runSequence(
    'run-bower',
    ['bootstrap'],
    callback
  );
});

gulp.task('run-bower', function() {
  return bower(bowerComponents);
});

// Move around some files from the bower folder into proper destinations.
gulp.task('bootstrap', function() {
  return gulp.src(bowerComponents + '/bootstrap-sass/assets/**/*', { base: bowerComponents + '/bootstrap-sass/assets/' })
    .pipe(gulp.dest(bootstrapSass));
});
/*
gulp.task('fonts-awesome', function() {
  return gulp.src(bowerComponents + '/dropzone/!**!/!*.*', { base: bowerComponents })
    .pipe(gulp.dest(assetLibraries));
});
gulp.task('imagesloaded', function() {
  return gulp.src(bowerComponents + '/imagesloaded/!**!/!*.*', { base: bowerComponents })
    .pipe(gulp.dest(assetLibraries));
});
gulp.task('jquery-colorbox', function() {
  return gulp.src(bowerComponents + '/jquery-colorbox/!**!/!*.*', { base: bowerComponents + '/jquery-colorbox' })
    .pipe(gulp.dest(assetLibraries + '/colorbox'));
});
gulp.task('masonry', function() {
  return gulp.src(bowerComponents + '/masonry/!**!/!*.*', { base: bowerComponents })
    .pipe(gulp.dest(assetLibraries));
});
gulp.task('matchHeight', function() {
  return gulp.src(bowerComponents + '/matchHeight/!**!/!*.*', { base: bowerComponents })
    .pipe(gulp.dest('./vendor'));
});

gulp.task('patternlab', function() {
  return gulp.src(bowerComponents + '/edition-php-drupal-standard/!**!/!*', { base: bowerComponents + '/edition-php-drupal-standard' })
    .pipe(gulp.dest(patternlab));
});

// Clean destinations.
gulp.task('clean-libraries', function() {
  return gulp.src(assetLibraries, {read: false})
    .pipe(clean({force: true}));
});
gulp.task('clean-theme-bootstrap', function() {
  return gulp.src('./bootstrap', {read: false})
    .pipe(clean());
});
gulp.task('clean-theme-vendor', function() {
  return gulp.src('./vendor', {read: false})
    .pipe(clean());
});*/

gulp.task('clean-bower', function() {
  return gulp.src('./vendor', {read: false})
    .pipe(clean());
});

gulp.task('default', ['bower']);
