import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Files
import theme from './theme'
import icons from './icons'

// Styles
import 'vuetify/styles'

export const VUETIFY_SETTINGS = createVuetify({
    components,
    directives,
    theme,
    icons
})