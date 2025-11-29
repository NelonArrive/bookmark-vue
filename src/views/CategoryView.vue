<script setup lang="ts">
import { BookmarkCard, CategoryHeader } from '@/components'
import { useBookmarkStore } from '@/store/bookmark.store'
import { useCategoryStore } from '@/store/category.store'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const categoryStore = useCategoryStore()
const bookmarkStore = useBookmarkStore()

const category = computed(() => {
  if (!route.params.alias) return undefined
  return categoryStore.getCategoryByAlias(route.params.alias)
})

const isReady = computed(() => categoryStore.categories.length > 0)

watch(
  [category, isReady],
  ([newCategory, ready]) => {
    if (!ready) return

    if (newCategory) {
      bookmarkStore.getBookmarks(newCategory.id)
    } else if (route.params.alias) {
      router.push({ name: 'NotFound' })
    }
  },
  { immediate: true },
)
</script>

<template>
  <div v-if="!isReady">
    <p>Загрузка...</p>
  </div>
  <div v-else-if="category">
    <CategoryHeader :category />
    <div>Закладок: {{ bookmarkStore.bookmarks.length }}</div>
    <div class="category-list">
      <BookmarkCard
        v-for="bookmark in bookmarkStore.bookmarks"
        :key="bookmark.id"
        v-bind="bookmark"
      />
    </div>
  </div>
</template>

<style scoped>
.category-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
