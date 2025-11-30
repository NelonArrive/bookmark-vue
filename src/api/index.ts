import { useAuthStore } from '@/store/auth.store'
import axios, { type AxiosInstance } from 'axios'

export const API_BASE = 'http://localhost:3000/api'

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.getToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.clearToken()
    }
    return Promise.reject(error)
  },
)

export const API_ROUTES = {
  profile: '/profile',
  categories: '/categories',
  bookmarks: {
    getAll: (categoryId: number) => `/categories/${categoryId}/bookmarks`,
    delete: (id: number) => `/bookmarks/${id}`,
    create: '/bookmarks',
  },
  auth: {
    login: '/auth/login',
    profile: '/auth/profile',
    register: '/auth/register',
  },
}

export { apiClient }
