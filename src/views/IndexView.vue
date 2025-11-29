<template>
  <div class="index">
    <div class="index__content">
      <svg class="index__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6 4v17l6-5 6 5V4z" />
      </svg>
      <h1 class="index__header">Здесь пока пусто 🥲</h1>
      <p class="index__description">
        Чтобы здесь что-то отобразилось, выберите категорию закладок или создайте новую.
      </p>
    </div>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background-color: var(--color-bg);
  color: var(--color-fg);
  padding: 20px;
  text-align: center;
}

.index__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.index__icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  color: var(--color-fg);
  animation: float 3s ease-in-out infinite;
}

.index__header {
  font-size: 28px;
  font-weight: 600;
  opacity: 0;
  animation: fadeIn 1s 0.5s forwards;
}

.index__description {
  font-size: 16px;
  max-width: 400px;
  line-height: 1.5;
  color: var(--color-inactive);
  opacity: 0;
  animation: fadeIn 1s 1s forwards;
}

/* Анимации */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
