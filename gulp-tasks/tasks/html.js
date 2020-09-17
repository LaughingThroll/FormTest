module.exports = () => {
  G.gulp.task('html', function () {
    return G.gulp.src('app/**/*.html')
      .pipe(G.gulpFilter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(G.gulp.dest('dist'))
      .pipe(G.browserSync.reload({ stream: true }))
  })
}