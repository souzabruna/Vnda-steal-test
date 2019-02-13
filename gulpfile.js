var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require( 'gulp-develop-server' );
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
 

//minificar js
gulp.task('compressJS', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

//gerar css minificado na pasta dist
gulp.task('cssMin', function () {
   	return gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


//minificar html
gulp.task('minify', () => {
  return gulp.src('src/views/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/html'));
});

//task para o sass
gulp.task('sass', function () {
   	return gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

//task para o servidor
gulp.task( 'server:start', function() {
    server.listen( { path: 'index.js' } );
    gulp.watch( [ 'index.js' ], server.restart );
});

gulp.task('default', function(){

});

