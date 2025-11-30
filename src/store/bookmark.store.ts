import { API_ROUTES, apiClient } from '@/api'
import type { TypeBookmark } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<TypeBookmark[]>([])
  const activeSort = ref<string>('date')

  async function getBookmarks(categoryId: number, sort: string) {
    const { data } = await apiClient.get<TypeBookmark[]>(API_ROUTES.bookmarks.getAll(categoryId), {
      params: {
        sort,
      },
    })
    bookmarks.value = data
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await apiClient.delete<TypeBookmark[]>(API_ROUTES.bookmarks.delete(id))
    getBookmarks(categoryId, activeSort.value)
  }

  async function addBookmark(url: string, category_id: number) {
    try {
      const { data } = await apiClient.post<TypeBookmark>(API_ROUTES.bookmarks.create, {
        url,
        category_id,
      })
      bookmarks.value.push(data)
    } catch (error) {
      console.error(error)
    }
  }

  return { activeSort, bookmarks, getBookmarks, deleteBookmark, addBookmark }
})
