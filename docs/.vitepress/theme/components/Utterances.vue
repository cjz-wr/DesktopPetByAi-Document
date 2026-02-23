<!-- docs/.vitepress/theme/components/Utterances.vue -->
<template>
  <div ref="commentContainer" class="utterances-container"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

// 接收自定义配置（可选）
const props = defineProps({
  repo: {
    type: String,
    required: true,  // 格式: '用户名/仓库名'
  },
  term: {
    type: String,
    default: 'pathname', // 可选: 'pathname' | 'url' | 'title' | 'og:title' | 具体issue编号
  },
  theme: {
    type: String,
    default: 'github-light', // 可选主题
  },
  label: {
    type: String,
    default: '', // 可以为评论打上标签
  },
})

const commentContainer = ref(null)
const route = useRoute()

// 初始化或重新加载 Utterances
const loadUtterances = () => {
  // 如果容器不存在，则返回
  if (!commentContainer.value) return

  // 清空容器，防止重复加载（每次路由变化都会重新创建）
  commentContainer.value.innerHTML = ''

  // 创建 script 元素
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', props.repo)
  script.setAttribute('issue-term', props.term)
  script.setAttribute('theme', props.theme)
  script.setAttribute('crossorigin', 'anonymous')
  if (props.label) {
    script.setAttribute('label', props.label)
  }
  script.async = true

  // 将 script 插入容器
  commentContainer.value.appendChild(script)
}

// 组件挂载时加载
onMounted(() => {
  loadUtterances()
})

// 监听路由变化，重新加载 Utterances（确保评论与当前页面匹配）
watch(
  () => route.path,
  () => {
    // 给一个小延迟，确保 DOM 更新完成
    setTimeout(loadUtterances, 100)
  }
)
</script>

<style scoped>
.utterances-container {
  margin-top: 2rem;
  width: 100%;
}
</style>