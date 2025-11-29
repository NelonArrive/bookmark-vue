<script setup lang="ts">
import { useProfileStore } from '@/store/profile.store'
import { onMounted } from 'vue'

const store = useProfileStore()

onMounted(() => {
  store.getProfile()
})
</script>

<template>
  <div class="profile-card" v-if="store.profile">
    <div class="profile-wrapper">
      <div class="avatar-wrapper">
        <img src="/avatar.png" alt="Аватар пользователя" />
      </div>

      <div class="profile-info">
        <span class="welcome-text">Привет,</span>
        <strong class="profile-name">{{ store.profile.name }} 👋</strong>
      </div>
    </div>

    <div class="profile-email">
      📧 <span class="profile-email-text">{{ store.profile.email }}</span>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  width: 80%;
  padding: 15px 20px;
  border-radius: 16px;
  border: 1px solid #ffffff22;
  box-shadow: 0 4px 12px #0000007e;
  transition: all 0.25s ease;
}

.profile-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px #000000c5;
}

.avatar-wrapper img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #62626244;
}

.profile-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}

.profile-email {
  margin-top: 10px;
  text-align: center;
}

.profile-email-text {
  color: #ffffff57;
}

.welcome-text,
.profile-name,
.profile-email {
  background-color: #42424244;
  padding: 4px 10px;
  border-radius: 6px;
}

.profile-name {
  font-size: 22px;
  line-height: 1;
}
</style>
