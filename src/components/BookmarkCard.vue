<script setup lang="ts">
import { useBookmarkStore } from '@/store/bookmark.store'
import type { TypeBookmark } from '@/types'
import { AkLinkChain, MdRoundDelete } from '@kalimahapps/vue-icons'

const { id, category_id, title, url, image } = defineProps<TypeBookmark>()
const bookmarkStore = useBookmarkStore()

const openLink = () => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="card">
    <img class="image" :src="image" :alt="title" />
    <div class="title">
      {{ title }}
    </div>
    <div class="footer">
      <Button
        @click="() => bookmarkStore.deleteBookmark(id, category_id)"
        variant="icon"
        title="Удалить"
      >
        <MdRoundDelete />
      </Button>

      <Button @click="openLink" variant="icon" title="Перейти">
        <AkLinkChain />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 320px;
  border-radius: 14px;
  background: var(--color-bg-hover);
  box-shadow: 0px 10px 10px 0px rgba(35, 35, 35, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.image {
  height: 160px;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}
.title {
  color: var(--color-fg);
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.footer button {
  background-color: var(--color-bg);
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;
}
.footer button:hover {
  background-color: var(--color-fg);
  color: var(--color-bg);
}
</style>
