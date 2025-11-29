<script setup lang="ts">
import { Button, Input } from '@/components'
import { useAuthStore } from '@/store/auth.store'
import { loginSchema } from '@/utils/validation'
import { useForm } from 'vee-validate'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const { defineField, handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: loginSchema,
  initialValues: {
    email: '',
    password: '',
  },
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

watch(
  () => authStore.getToken,
  (token) => {
    if (token) {
      router.push({ name: 'home' })
    }
  },
)

const onSubmit = handleSubmit(async (values) => {
  try {
    await authStore.login(values.email, values.password)
  } catch (err: any) {
    console.error('Ошибка входа:', err)
  }
})
</script>

<template>
  <div class="aus-view">
    <h1 class="title">Bookmark Vue</h1>
    <p class="description">
      Сохраняй и управляй своими любимыми закладками в одном месте. Удобно, просто и быстро!
    </p>

    <form class="form" @submit="onSubmit">
      <div class="input-group">
        <div class="field">
          <Input
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            placeholder="Enter email"
            :class="{ 'error-input': errors.email }"
          />
          <span v-if="errors.email" class="error-message">
            {{ errors.email }}
          </span>
        </div>

        <div class="field">
          <Input
            v-model="password"
            v-bind="passwordAttrs"
            type="password"
            placeholder="Enter password"
            :class="{ 'error-input': errors.password }"
          />
          <span v-if="errors.password" class="error-message">
            {{ errors.password }}
          </span>
        </div>
      </div>

      <Button type="submit" class="btn-login" :disabled="isSubmitting">
        {{ isSubmitting ? 'Вход...' : 'Войти' }}
      </Button>

      <div class="register">
        Нету аккаунта?
        <RouterLink to="/register">Регистрация</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.error-input {
  border-color: #ff4444 !important;
}

.error-message {
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: left;
}

.register {
  margin-top: 30px;
  font-size: 18px;
}

.register a {
  color: #ffffff4d;
  transition: all 0.2s ease-in;
}

.register a:hover {
  text-decoration: underline;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
}

.aus-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background: var(--color-bg);
  color: var(--color-fg);
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--color-inactive);
  max-width: 500px;
}

.btn-login {
  padding: 0.8rem 2rem;
  width: 100%;
  color: var(--color-fg);
  background: var(--color-bg-hover);
  transition:
    background 0.3s,
    color 0.3s;
}

.btn-login:hover:not(:disabled) {
  background: var(--color-fg);
  color: var(--color-bg);
}

.btn-login:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
