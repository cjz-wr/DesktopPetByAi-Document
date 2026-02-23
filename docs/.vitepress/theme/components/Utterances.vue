<template>
  <div ref="commentContainer" class="utterances-container"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const props = defineProps({
  repo: { type: String, required: true },
  term: { type: String, default: 'pathname' },
  theme: { type: String, default: 'github-light' },
})

const container = ref(null)
const route = useRoute()

const load = () => {
  if (!container.value) return
  container.value.innerHTML = '' // 清空容器，避免重复
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', props.repo)
  script.setAttribute('issue-term', props.term)
  script.setAttribute('theme', props.theme)
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  container.value.appendChild(script)
}

onMounted(load)
// 路由变化时重新加载（确保评论与当前页面匹配）
watch(() => route.path, () => setTimeout(load, 100))
</script>