<script setup lang="ts">
import { ProfileAvatar } from './components'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
    </nav>
    <main>Контент</main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1440px;
  margin: 140px auto;
}
.nav {
  min-width: 400px;
}
</style>
