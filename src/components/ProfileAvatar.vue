<script setup lang="ts">
import { useProfileStore } from '@/store/profile.store'
import { onMounted } from 'vue'

const store = useProfileStore()

onMounted(() => {
  store.fetchProfile()
})
</script>

<template>
  <div class="profile-avatar" v-if="store.profile">
    <img src="/avatar.png" alt="Изображение пользователя" />
    <div class="">
      Привет, <strong>{{ store.profile.name }}</strong>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 42px;
}
.profile-avatar img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
