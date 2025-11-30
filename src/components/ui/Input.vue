<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const {
  isFocused = false,
  type,
  placeholder,
  disabled,
} = defineProps<{
  isFocused?: boolean
  type?: string
  placeholder?: string
  disabled?: boolean
}>()

const input = useTemplateRef<HTMLInputElement>('input')

const model = defineModel<string>()

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus()
  }
})
</script>

<template>
  <input
    ref="input"
    class="input"
    :type="type || 'text'"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="model"
    autocomplete="on"
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
