import { API_ROUTES, apiClient } from '@/api'
import type { TypeProfile } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<TypeProfile>()
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getProfile() {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await apiClient.get<TypeProfile>(API_ROUTES.auth.profile)
      profile.value = data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Ошибка загрузки профиля'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { profile, isLoading, error, getProfile }
})
