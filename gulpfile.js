'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    minifyCSS = require('gulp-minify-css'),
    path = require('path');

//----------------------------------------------------------
// Config
//----------------------------------------------------------

var config = {
    catalog: '',
    out: 'web/dist',
};

//----------------------------------------------------------
// GulpSass
//----------------------------------------------------------

gulp.task('sass', function () {
        gulp.src([ 'src/scss/**/*.scss' ])
        .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(minifyCSS())
            .pipe(concat('style.min.css'))
            .pipe(browserSync.stream())
        .pipe(gulp.dest(config.out + '/css'));
});

//----------------------------------------------------------
// GulpJS
//----------------------------------------------------------

gulp.task('js', function() {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'src/plugins/jscolor/jscolor.js',
        'src/plugins/dropzone/dropzone.js',
        'src/js/**/*.js'
    ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest(config.out + '/js'));
});

//----------------------------------------------------------
// GulpImages
//----------------------------------------------------------

gulp.task('images', function() {
    gulp.src([
        'src/images/**/*'
    ])
        .pipe(gulp.dest('web/dist/images'));
})


//----------------------------------------------------------
// Reload
//----------------------------------------------------------

gulp.task('serve', ['sass','js'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    gulp.watch('src/js/**/*.js', ['js'])
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch("web/dist/*.html").on('change', browserSync.reload);
});

//----------------------------------------------------------
// GulpWatch
//----------------------------------------------------------

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass'])
    gulp.watch('src/js/**/*.js', ['js'])
});


gulp.task('default', ['js', 'sass', 'images', 'serve']);






