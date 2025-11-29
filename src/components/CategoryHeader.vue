<script setup lang="ts">
import type { TypeCategory } from '@/types'
import { ref, watch } from 'vue'
import { Button, Input } from '.'
import { AkEdit, BsCheckCircleFill, MdClose, MdRoundDelete } from '@kalimahapps/vue-icons'
import { useCategoryStore } from '@/store/category.store'
import { useRouter } from 'vue-router'

const { category } = defineProps<{ category: TypeCategory }>()
const isEdited = ref<boolean>(false)
const newCategoryName = ref<string>(category.name)
const categoryStore = useCategoryStore()
const router = useRouter()

const toggleEdit = () => {
  isEdited.value = !isEdited.value
  if (!isEdited.value) {
    newCategoryName.value = category.name
  }
}

const updateCategory = () => {
  if (!newCategoryName.value.trim()) return
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id)
  toggleEdit()
}

const deleteCategory = () => {
  if (confirm(`Вы уверены, что хотите удалить категорию "${category.name}"?`)) {
    categoryStore.deleteCategory(category.id)
  }
  router.push({ name: 'home' })
}

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    updateCategory()
  } else if (e.key === 'Escape') {
    toggleEdit()
  }
}

watch(
  () => category.name,
  (name) => {
    newCategoryName.value = name
  },
)
</script>

<template>
  <div class="header">
    <div class="title-section">
      <h2 v-if="!isEdited" class="title">{{ category.name }}</h2>
      <Input
        v-else
        v-model="newCategoryName"
        @keydown="handleKeyPress"
        autofocus
        class="title-input"
      />
    </div>

    <div class="actions">
      <Button v-if="isEdited" @click="updateCategory" variant="icon" title="Сохранить">
        <BsCheckCircleFill />
      </Button>

      <Button v-if="isEdited" @click="toggleEdit" variant="icon" title="Отменить">
        <MdClose />
      </Button>

      <Button v-if="!isEdited" @click="toggleEdit" variant="icon" title="Редактировать">
        <AkEdit />
      </Button>

      <Button v-if="!isEdited" @click="deleteCategory" variant="icon" title="Удалить">
        <MdRoundDelete />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}

.title {
  font-size: 30px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title-input {
  width: 100%;
  max-width: 400px;
  font-size: 24px;
  padding: 8px 12px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;
}

.actions button {
  font-size: 1.4rem;
  transition: all 0.2s ease-in;
}
</style>
