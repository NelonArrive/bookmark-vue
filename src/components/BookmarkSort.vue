<script setup lang="ts">
import { Button } from '.'

const { option } = defineProps<{ option: string }>()

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
]

const emit = defineEmits<{
  (e: 'sort', option: string): void
}>()
</script>

<template>
  <div class="group">
    <Button
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="option == item.option ? 'active' : ''"
      @click="() => emit('sort', item.option)"
      class="item"
    >
      {{ item.name }}
    </Button>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  gap: 10px;
  align-items: center;
}
.item {
  background: var(--color-bg-hover) !important;
  color: var(--color-fg) !important;
}
.item.active {
  background: var(--color-fg) !important;
  color: var(--color-bg) !important;
}
</style>
