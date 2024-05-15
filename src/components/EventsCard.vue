<script setup>
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from '@/components/ui/card';
import { Building2Icon, CarFrontIcon, HomeIcon, SparklesIcon, WineIcon } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import EventAvailability from './EventAvailability.vue';
import IconTip from './IconTip.vue';
const props = defineProps({
  buffetId: {
    type: String,
    required: true
  }
});

let events = ref(null)

onMounted(async() => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/buffets/${props.buffetId}/event_types`)
    if (!response.ok) {
      throw new Error('Erro ao buscar tipos de eventos')
    }
    events.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
})

</script>

<template>
  <div class="grid grid-cols-3 gap-4 mx-auto">
    <Card v-for="event in events" :key="event.id">
      <CardHeader>
          <CardTitle>{{ event.name }}</CardTitle>
          <CardDescription class="text-justify">{{ event.description }}</CardDescription>
      </CardHeader>
      <CardContent class="">
       <p>Capacidade mínima: {{ event.capacity_min}}</p>
       <p>Capacidade máxima: {{event.capacity_max}}</p>
       <p>Duração: {{ event.duration}}</p>
       <p>Cardapio: {{event.food_menu}}</p>
       <div class="flex flex-row gap-2 justify-start mt-4">
        <IconTip v-if="event.alcoholic_drinks" :iconName="WineIcon" :iconTip="'Bebidas alcoólicas'"/>
        <IconTip v-if="event.decoration" :iconName="SparklesIcon" :iconTip="'Decoração'"/>
        <IconTip v-if="event.parking_service" :iconName="CarFrontIcon" :iconTip="'Estacionamento'"/>
        <IconTip v-if="event.buffet_exclusive_address" :iconName="Building2Icon" :iconTip="'Realizado exclusivamente no endereço do buffet'"/>
        <IconTip v-if="event.client_specified_address" :iconName="HomeIcon" :iconTip="'Aceita endereço indicado pelo contratante'"/>
       </div>
      </CardContent>
      <CardFooter>
        <EventAvailability :buffetId="event.buffet_id" :eventTypeId="event.id"/>
      </CardFooter>
    </Card>
  </div>
</template>