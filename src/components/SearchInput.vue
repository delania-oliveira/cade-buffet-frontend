<script setup>
  import { ref, watch } from 'vue'
  import { Search } from 'lucide-vue-next'
  import { Input } from '@/components/ui/input'

  let searchValue = ref('')

  watch(searchValue, (newVal) => {
    console.log(`Valor de pesquisa alterado para ${newVal}`)
  })

  const updateSearchValue = (Event) => {
    searchValue.value = (Event.target).value
  } 
</script>

<template>
  <div class="flex justify-center">
    <div class="relative w-full max-w-xl items-center">
      <Input id="search" type="text" placeholder="Digite para buscar..." class="pl-10" v-model="searchValue" @input="updateSearchValue"/>
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
  </div>
</template>
