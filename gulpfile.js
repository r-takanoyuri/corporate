var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('sass', function() {
    gulp.src('src/**/css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('imagemin', function() {
    gulp.src('src/**/img/**/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(imagemin({
        progressive: true,
        use: [pngquant({quality: '65-80', speed: 1})]
    }))
    .pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
  watch('src/**/css/*.scss', function() {
    gulp.start('sass');
  });
});