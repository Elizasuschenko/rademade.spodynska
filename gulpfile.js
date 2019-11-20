var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task("script", function() {
    return gulp.src("src/static/js/*.js")
        .pipe(gulp.dest("build/js"));
});

gulp.task("img", function() {
    return gulp.src("src/static/img/*.+(jpg|jpeg|png|gif)")
        .pipe(gulp.dest("build/img"));
});

gulp.task("sass", function() {
    return gulp.src("src/static/css/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("build/css"));
});


gulp.task("watch", function() {
    gulp.watch("src/pug/**/*.pug",gulp.series("pug"));
    gulp.watch("src/static/**/*.js",gulp.series("script"));
    gulp.watch("src/static/**/*.+(jpg|jpeg|png|gif|svg)",gulp.series("img"));
    gulp.watch("src/static/**/*.sass",gulp.series("sass"));
});

gulp.task("default",gulp.series(
    gulp.parallel("pug", "sass", "script", "img"),
    'watch'));