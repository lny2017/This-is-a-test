var gulp = require("gulp");
var minCss = require("gulp-minify-css");
var minJs = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");

gulp.task("css", function(){
    gulp.src("./css/*.css")
        .pipe(concat("./main.css"))
        .pipe(minCss())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./css/"))
})

gulp.task("js", function(){
    gulp.src("./js/*.js")
        .pipe(concat("./main.js"))
        .pipe(minJs())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest("./js/"))
})