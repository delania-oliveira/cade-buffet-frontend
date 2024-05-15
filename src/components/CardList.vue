<script setup>
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from '@/components/ui/card'
import useBuffetData from '@/services/fetchBuffetData.js'
import { MapPin } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import SearchInput from '../components/SearchInput.vue'
import CardDetail from './CardDetail.vue'
import Button from './ui/button/Button.vue'

  const { data, fetchBuffets } = useBuffetData()
  fetchBuffets()

  const searchTerm = ref('')
  const filteredData = computed(() => {
    if (!searchTerm.value) return data.value
    return data.value.filter(buffet => buffet.brand_name.toLowerCase().includes(searchTerm.value))
  })

  const showDetail = ref(false);
  const showList = ref(true);

  let selectedBuffetId = ref(null);

  const showCardDetail = (buffetId) => {
    selectedBuffetId.value = buffetId
    showList.value = false;
    showDetail.value = true;
  };
  const showCardList = () => {
    selectedBuffetId.value = null
    showDetail.value = false;
    showList.value = true;
  };

</script>

<template>
  <div v-if="!showDetail && showList" class="flex flex-col gap-y-8">
    <SearchInput v-model="searchTerm"/>
    <div class="grid grid-cols-3 gap-4 max-w-7xl mx-auto justify-center content-center">
      <Card v-for="buffet in filteredData" :key="buffet.id">
        <CardHeader>
          <CardTitle>{{buffet.brand_name}}</CardTitle>
          <CardDescription class="text-justify">
            {{buffet.description}}
          </CardDescription>
        </CardHeader>
        <CardContent class="flex flex-row gap-1">
          <MapPin class="size-6 text-muted-foreground" />
          {{buffet.city}}-{{buffet.state}}
        </CardContent>
        <CardFooter>
          <Button @click="showCardDetail(buffet.id)">Ver detalhes</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  <CardDetail v-else @go-back="showCardList" :buffetId="selectedBuffetId"/>
</template>
