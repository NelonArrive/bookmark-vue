<script setup lang="ts">
import { useBookmarkStore } from '@/store/bookmark.store'
import { MiPlus } from '@kalimahapps/vue-icons'
import { ref } from 'vue'
import { Button, Input } from '.'

const { categoryId } = defineProps<{
  categoryId: number
}>()

const isEdited = ref<boolean>(false)
const newUrl = ref<string>('')

const bookmarkStore = useBookmarkStore()

const toggleIsEdited = () => {
  isEdited.value = !isEdited.value
}

const addBookmark = () => {
  if (!newUrl.value) return
  bookmarkStore.addBookmark(newUrl.value, categoryId)
  isEdited.value = false
  newUrl.value = ''
}
</script>

<template>
  <div class="card">
    <Button v-if="!isEdited" @click="toggleIsEdited">
      <MiPlus />
      <span>Добавить</span>
    </Button>

    <div v-else>
      <Input isFocused v-model="newUrl" placeholder="Введите URL" />
      <div class="save">
        <Button @click="addBookmark" variant="primary"> Сохранить </Button>
        <Button @click="toggleIsEdited" variant="secondary"> Отмена </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px dashed var(--color-fg);
}
.save {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
