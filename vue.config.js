export const configureWebpack = {
  plugins: [
    require('unplugin-vue-components/webpack')({
      /* options */
    }),
    require('unplugin-auto-import/webpack')({
      /* options */
    }),
  ],
}
