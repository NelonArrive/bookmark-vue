<!-- Button.vue -->
<script setup lang="ts">
const props = defineProps<{
  text?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isLoading?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'icon'
}>()
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled || isLoading"
    :class="['button', variant && `button--${variant}`]"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  border-radius: 10px;
  background: var(--color-fg);
  color: var(--color-bg);
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.3s ease-in-out;
}

.button:hover:not(:disabled) {
  opacity: 0.8;
}

.button:active:not(:disabled) {
  transform: translateY(2px) scale(0.98);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Варианты кнопок */
.button--secondary {
  background: var(--color-bg-hover);
  color: var(--color-fg);
}

.button--danger {
  background: #ff4444;
  color: white;
}

.button--icon {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  background: var(--color-bg-hover);
  color: var(--color-fg);
}

.button--icon:hover:not(:disabled) {
  background: var(--color-fg);
  color: var(--color-bg-hover);
}
</style>
