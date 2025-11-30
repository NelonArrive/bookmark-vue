<script setup lang="ts">
import { BookmarkAdd, BookmarkCard, BookmarkSort, CategoryHeader } from '@/components'
import { useBookmarkStore } from '@/store/bookmark.store'
import { useCategoryStore } from '@/store/category.store'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const categoryStore = useCategoryStore()
const bookmarkStore = useBookmarkStore()

const sortBookmarks = (sort: string) => {
  bookmarkStore.activeSort = sort
  if (category.value) {
    bookmarkStore.getBookmarks(category.value?.id, bookmarkStore.activeSort)
  }
}

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
      bookmarkStore.getBookmarks(newCategory.id, bookmarkStore.activeSort)
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
    <div v-if="bookmarkStore.bookmarks.length">
      <BookmarkSort @sort="sortBookmarks" :option="bookmarkStore.activeSort" />
      <div class="category-list">
        <BookmarkCard
          v-for="bookmark in bookmarkStore.bookmarks"
          :key="bookmark.id"
          v-bind="bookmark"
        />
        <BookmarkAdd :categoryId="category?.id" />
      </div>
    </div>
    <div v-else class="not-empty">
      <span>Пока закладок нет - добавь первую 👇</span>
      <BookmarkAdd class="add" :categoryId="category?.id" />
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
.not-empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  color: #ffffff78;
}
.not-empty span {
  margin: 25px 0;
}
.add {
  border: none;
}
</style>
