<script setup>
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';
import { ref, watchEffect } from 'vue';

const props = defineProps({
  modelValue: String
})

const internalValue = ref(props.modelValue || '')

watchEffect(()=> {
  internalValue.value = props.modelValue
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  internalValue.value = value
  emit('update:modelValue', value)
}

</script>

<template>
  <div class="flex justify-center">
    <div class="relative w-full max-w-xl items-center">
      <Input id="search" type="text" placeholder="Digite para buscar..." class="pl-10" v-model="internalValue" @input="updateValue($event.target.value)"/>
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
  </div>
</template>
