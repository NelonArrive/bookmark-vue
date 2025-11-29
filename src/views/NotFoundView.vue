<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/home')
}
</script>

<template>
  <div class="not-found-view">
    <div class="content">
      <h1 class="error-code">404</h1>
      <p class="error-message">Ой! Страница, которую ты ищешь, не найдена.</p>
      <p class="error-description">Возможно, она была удалена или ссылка введена неверно.</p>
      <button @click="goHome" class="btn-home">Вернуться на главную</button>
    </div>
    <div class="illustration">
      <div class="file"></div>
    </div>
  </div>
</template>

<style scoped>
.not-found-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: var(--color-bg);
  color: var(--color-fg);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  color: var(--color-fg);
  animation: pop 0.6s ease-out;
}

.error-message {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 500;
  color: var(--color-inactive);
}

.error-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 400px;
  color: var(--color-inactive);
}

.btn-home {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-fg);
  background: var(--color-bg-hover);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;
}

.btn-home:hover {
  background: var(--color-fg);
  color: var(--color-bg);
}

@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  80% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.illustration {
  position: absolute;
  top: 20%;
  right: -100px;
  width: 100px;
  height: 100px;
  animation: float 5s infinite linear;
}

.file {
  width: 60px;
  height: 80px;
  background: var(--color-bg-hover);
  border-radius: 8px;
  position: relative;
}

.file::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: var(--color-bg);
  border-bottom-left-radius: 5px;
}

@keyframes float {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(-200px) rotate(15deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
</style>
