<script setup lang="ts">
const props = defineProps<{
  type?: string
  placeholder?: string
  disabled?: boolean
}>()

const model = defineModel<string>()
</script>

<template>
  <input
    class="input"
    :type="type || 'text'"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="model"
  />
</template>

<style scoped>
.input {
  font-size: 18px;
  border: 1px solid #cccccc3e;
  padding: 15px 19px;
  border-radius: 12px;
  width: 100%;
}
</style>
