module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    'cssnano': {}, // ctx.env === 'production' ? {} : false
  }
});
