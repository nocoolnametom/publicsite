import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/index.ts',

  output: [
    {
      file: 'dist/index.js',
      format: 'iife'
    }
  ],

  plugins: [
    typescript()
  ]
}
