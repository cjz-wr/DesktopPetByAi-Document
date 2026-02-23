import DefaultTheme from 'vitepress/theme'
import Utterances from './components/Utterances.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Utterances', Utterances)
  }
}