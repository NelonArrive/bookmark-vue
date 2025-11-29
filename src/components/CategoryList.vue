<script setup lang="ts">
import { useCategoryStore } from '@/store/category.store'
import { onMounted } from 'vue'
import { MiPlus, TaOutlineLogout2 } from '@kalimahapps/vue-icons'
import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'vue-router'

const categoryStore = useCategoryStore()
const authStore = useAuthStore()

const router = useRouter()

function logout() {
  authStore.clearToken()
  router.push({ name: 'auth' })
}

onMounted(() => categoryStore.getCategories())
</script>

<template>
  <ul class="category-list">
    <!-- Категории -->
    <RouterLink
      v-for="item in categoryStore.categories"
      :key="item.id"
      :to="`/home/category/${item.alias}`"
      class="list-item"
      active-class="active-link"
    >
      {{ item.name }}
    </RouterLink>

    <!-- Добавить категорию -->
    <li class="list-item add-btn" @click="categoryStore.createCategory">
      <MiPlus />
      <span>Добавить категорию</span>
    </li>

    <!-- Выход -->
    <li class="list-item logout" @click="logout">
      <TaOutlineLogout2 />
      <span>Выход</span>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  height: 100%;
  position: relative;
  padding-bottom: 50px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
  border: 1px solid #cccccc73;
  padding: 15px 3px;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
  color: var(--color-fg);

  background-color: #ffffff08;
  transition: all 0.25s ease;
}

.list-item:hover {
  background-color: var(--color-primary-soft, #eeeeee22);
  transform: translateY(-1px);
  box-shadow: 0 4px 14px #00000015;
}

/* Активная ссылка */
.active-link {
  font-weight: 700;
  background-color: var(--color-primary-soft, #eeeeee22);
  box-shadow: 0 4px 14px #0000001a;
}

/* Кнопка “Добавить категорию” */
.add-btn {
  border-style: dashed;
  opacity: 0.85;

  margin-bottom: 60px;
}
.add-btn:hover {
  opacity: 1;
  background-color: #3cbaee26;
}

/* Выход */
.logout {
  width: 100%;
  position: absolute;

  bottom: 0;
  border-color: #ff4b4b55;
  background-color: #ff4b4b22;
  margin-top: 10px;
}
.logout:hover {
  background-color: #ff4b4b33;
  color: #ff1f1f;
  box-shadow: 0 4px 14px #ff000033;
}
</style>
