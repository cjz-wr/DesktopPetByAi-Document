// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Utterances from './components/Utterances.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件，这样在任何 Markdown 文件中都可以直接使用 <Utterances />
    app.component('Utterances', Utterances)
  },
}