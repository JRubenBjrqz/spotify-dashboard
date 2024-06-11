import type { VuetifyOptions } from 'vuetify'

const THEME: VuetifyOptions['theme'] = {
  themes: {
    light: {
      dark: false,
      colors: {
        'light-green': '#1ED760',
        'black': '#121212',
        'white': '#FFFFFF',
        'bright-accent': '#CBF55C',
        'base': '#400073',
        'light-base': 'rgba(64, 0, 115, 0.07)',
        'subdued': '#D7BFFF'
      }
    },
  },
}

export default THEME
