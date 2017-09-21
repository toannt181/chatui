/**
 * Created by Dmytro on 3/27/2016.
 */
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

/* pathConfig*/
var browserDir = './dist',
    sassWatchPath = './src/css/**/*.scss';
/**/

gulp.task('sass', function () {
    return gulp.src('src/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
    gulp.watch(sassWatchPath, ['sass']).on('change', function () {
        console.log('css change');
    });
});

gulp.task('default', ['sass', 'watch']);