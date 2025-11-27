import { API_ROUTES } from '@/api'
import type { TypeProfile } from '@/types'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<TypeProfile>()

  async function fetchProfile() {
    const { data } = await axios.get<TypeProfile>(API_ROUTES.profile)
    profile.value = data
  }

  return { profile, fetchProfile }
})
