
	'use strict';

	var gulp  			= require('gulp'),
		watch 			= require('gulp-watch'),
		source 			= require('vinyl-source-stream'),
		browserify 		= require('browserify'),
		sass 			= require('gulp-sass'),
		concat 			= require('gulp-concat'),
		uglify 			= require('gulp-uglify'),
		gutil 			= require('gulp-util'),
		jshint 			= require('gulp-jshint'),
		buffer 			= require('vinyl-buffer'),
		minifyCss 		= require('gulp-minify-css'),
		compass 		= require('gulp-compass'),
		browserSync 	= require('browser-sync').create();


	//browserSync --------------------------------------------------------------- +
	gulp.task('browser-sync', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./www"
	        }
	    });
	});


	//JShint -------------------------------------------------------------------- +
	gulp.task('jshint', function () {
		gulp.src(['app/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
	  	.pipe(jshint.reporter('fail'))
		.on('error', function(){

		});
	});


	//Browserify ---------------------------------------------------------------- +
	gulp.task('browserify', function () {

		  var b = browserify();
		  b.add("./app/App.js");

		  return b.bundle()
		    .on('error', function(err){
		      console.log(err.message);
		      this.emit('end');
		    })
		    .pipe(source('App.min.js'))
			.pipe(buffer())
    		.pipe(uglify())
		    .pipe(gulp.dest('./www/static/js/'))
			.pipe(browserSync.reload({stream: true}));
	});


	//Concat scripts ----------------------------------------------------------- +
	gulp.task('scripts', function() {
	  return gulp.src('./lib/*.js')
	    .pipe(concat('lib.js'))
	    .pipe(gulp.dest('./www/static/js/'));
	});


	//SASS ---------------------------------------------------------------------- +
	gulp.task('sass', function() {
		gulp.src('./sass/*.scss')
    	.pipe(compass({
      		config_file: './config.rb',
      		css: './www/static/css',
      		sass: 'sass'
		}))
    	.pipe(gulp.dest('./www/static/css'))
		.pipe(browserSync.reload({stream: true}));
	});


	//CSS minify ---------------------------------------------------------------- +
	gulp.task('minify-css', function() {
	  return gulp.src('www/static/css/*.css')
	    .pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('www/static/css/'));
	});


	//Watcher ------------------------------------------------------------------- +
	gulp.task('watch', function() {
		gulp.watch('app/**/*.js', ['jshint','browserify','scripts']);
		gulp.watch('sass/**/*.scss', ['sass']);
		gulp.watch(["www/*.html","www/templates/*.html"]).on('change',  browserSync.reload);
	});


	//default tasks ------------------------------------------------------------ +
	gulp.task('default', ['browser-sync','watch']);
