<script setup>
  import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
  } from '@/components/ui/card'
  import EventAvailability from './EventAvailability.vue'
  import IconTip from './IconTip.vue'
  import { WineIcon } from 'lucide-vue-next'
  import { SparklesIcon } from 'lucide-vue-next'
  import { CarFrontIcon } from 'lucide-vue-next'
  import { Building2Icon } from 'lucide-vue-next'
  import { HomeIcon } from 'lucide-vue-next'
</script>

<template>
  <Card>
    <CardHeader>
      <img :src="'{{images}}'" alt=''>
      <div>
        <CardTitle>{{name}}Conferência de Tecnologia</CardTitle>
        <CardDescription class="text-justify">{{description}}Uma conferência para discutir as últimas tendências em tecnologia.</CardDescription>
      </div>
    </CardHeader>
    <CardContent class="">
     <p>Capacidade mínima: {{capacity_min}}</p>
     <p>Capacidade máxima: {{capacity_max}}</p>
     <p>Duração: {{duration}}</p>
     <p>Cardapio: {{food_menu}}</p>
     <div class="flex flex-row gap-4 justify-start mt-4">
      <IconTip :iconName="WineIcon" :iconTip="'Bebidas alcoólicas'"/>
      <IconTip :iconName="SparklesIcon" :iconTip="'Decoração'"/>
      <IconTip :iconName="CarFrontIcon" :iconTip="'Estacionamento'"/>
      <IconTip :iconName="Building2Icon" :iconTip="'Realizado exclusivamente no endereço do buffet'"/>
      <IconTip :iconName="HomeIcon" :iconTip="'Aceita endereço indicado pelo contratante'"/>
     </div>
    </CardContent>
    <CardFooter>
      <EventAvailability/>
    </CardFooter>
  </Card>
</template>