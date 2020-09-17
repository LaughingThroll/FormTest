module.exports = () => {
  G.gulp.task('export:images', function () {
    return G.gulp.src('app/static/images/**/*.*')
      .pipe(G.gulp.dest('dist/images/'))
  })
}    
