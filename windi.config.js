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
        primary: '#312e81',
        g1: '#a6c0fe',
        g2: '#f68084',
        bluelight: '#59afc5',
      },
    },
  },
})
