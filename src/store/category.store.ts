import { API_ROUTES, apiClient } from '@/api'
import type { TypeCategory } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<TypeCategory[]>([])

  async function getCategories() {
    const { data } = await apiClient.get<TypeCategory[]>(API_ROUTES.categories)
    categories.value = data
  }

  async function createCategory() {
    const { data } = await apiClient.post<TypeCategory>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuid(),
    })
    categories.value.push(data)
  }

  async function updateCategory(name: string, alias: string, id: number) {
    await apiClient.put<TypeCategory>(`${API_ROUTES.categories}/${id}`, {
      name,
      alias,
    })
    getCategories()
  }

  async function deleteCategory(id: number) {
    await apiClient.delete<TypeCategory>(`${API_ROUTES.categories}/${id}`)
    getCategories()
  }

  function getCategoryByAlias(alias: string | string[]): TypeCategory | undefined {
    if (typeof alias == 'string') {
      return categories.value.find((c) => c.alias === alias)
    }
    return
  }

  return {
    categories,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryByAlias,
  }
})
