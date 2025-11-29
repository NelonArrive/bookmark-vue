import { API_ROUTES, apiClient } from '@/api'
import type { TypeBookmark } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<TypeBookmark[]>([])

  async function getBookmarks(categoryId: number) {
    const { data } = await apiClient.get<TypeBookmark[]>(API_ROUTES.bookmarks(categoryId))
    bookmarks.value = data
  }

  return { bookmarks, getBookmarks }
})
