<script setup lang="ts">
import { CategoryList, ProfileAvatar } from '@/components'
import { useCategoryStore } from '@/store/category.store'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(async () => {
  if (categoryStore.categories.length === 0) {
    await categoryStore.getCategories()
  }
})
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100% - 140px);
  gap: 20px;
  max-width: 1270px;
  margin: 140px auto;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
}
main {
  border: 1px solid #ffffff30;
  width: 100%;
  padding: 30px;
  border-radius: 16px;
}
</style>
