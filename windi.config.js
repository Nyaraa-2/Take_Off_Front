import { defineConfig } from 'windicss/helpers'
export default defineConfig({
  /* configurations... */
  attributify: {
    prefix: 'w:',
  },
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#8A87C1',
        secondary: '#303056',
        tertiary: '#FF0000',
        muted: '#676767',
        g1: '#E8CAFB',
        g2: '#8A87C1',
      },
    },
  },
})
