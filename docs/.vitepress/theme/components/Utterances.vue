<template>
  <div ref="container" class="utterances-container"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const props = defineProps({
  repo: {
    type: String,
    required: true,
    default: 'cjz-wr/DesktopByAi-Document'
  },
  issueTerm: {
    type: String,
    default: 'pathname'
  },
  label: {
    type: String,
    default: 'bug'
  },
  theme: {
    type: String,
    default: 'github-dark'
  }
})

const container = ref(null)
const route = useRoute()

// 检查是否在浏览器环境（避免 SSR 执行）
const isBrowser = typeof window !== 'undefined'

const loadUtterances = () => {
  if (!isBrowser) return
  if (!container.value) return

  // 清空容器（避免重复加载）
  container.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', props.repo)
  script.setAttribute('issue-term', props.issueTerm)
  script.setAttribute('label', props.label)
  script.setAttribute('theme', props.theme)
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  container.value.appendChild(script)
}

// 组件挂载后加载评论区
onMounted(() => {
  loadUtterances()
})

// 监听路由变化，重新加载评论区（适配 SPA 页面切换）
watch(() => route.path, () => {
  // 给旧评论区一点卸载时间
  setTimeout(loadUtterances, 100)
})
</script>

<style scoped>
.utterances-container {
  margin-top: 2rem;
  min-height: 200px; /* 避免加载时布局抖动 */
}
</style>