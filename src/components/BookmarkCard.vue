<script setup lang="ts">
import type { TypeBookmark } from '@/types'
import { AkLinkChain, MdRoundDelete } from '@kalimahapps/vue-icons'

const { id, category_id, title, url, image, created_at } = defineProps<TypeBookmark>()
</script>

<template>
  <div class="card">
    <div class="card-image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="">
      {{ title }}
    </div>
    <div class="footer">
      <Button variant="icon" title="Удалить">
        <MdRoundDelete />
      </Button>

      <Button variant="icon" title="Перейти">
        <AkLinkChain />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 14px;
  background: var(--color-bg-hover);
  box-shadow: 0px 10px 10px 0px rgba(35, 35, 35, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.image {
  min-height: 160px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}
.title {
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 500;
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>
