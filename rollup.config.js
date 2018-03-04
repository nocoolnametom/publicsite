import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.ts',

  output: [
    {
      file: 'dist/index.js',
      format: 'iife',
    },
  ],

  plugins: [
    typescript(),
    uglify(),
  ],
}
