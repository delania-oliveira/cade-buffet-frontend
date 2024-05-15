<script setup>
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from '@/components/ui/card';
import { computed, onMounted, ref } from 'vue';
import EventsCard from './EventsCard.vue';
import Button from './ui/button/Button.vue';

const props = defineProps({
  buffetId: {
    type: String,
    required: true
  }
});

let buffet = ref(null)

onMounted(async()=> {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/buffets/${props.buffetId}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar buffet')
    }
    buffet.value = await response.json()
  } catch (err) {
    error.value = err.message
  }
})

let brand_name = computed(() => buffet.value?.brand_name);
let description = computed(() => buffet.value?.description);
let telephone = computed(() => buffet.value?.telephone);
let email = computed(() => buffet.value?.email);
let address = computed(() => buffet.value?.address);
let district = computed(() => buffet.value?.district);
let city = computed(() => buffet.value?.city);
let state = computed(() => buffet.value?.state);
let cep = computed(() => buffet.value?.cep);
let payment_methods = computed(() => buffet.value?.payment_methods);

</script>

<template>
  <div class="grid max-w-7xl mx-auto justify-center content-center">
    <Card>
      <CardHeader>
        <CardTitle>{{ brand_name }}</CardTitle>
        <CardDescription class="text-justify">{{ description }}</CardDescription>
      </CardHeader>
      <CardContent class="">
        <p>Telefone: {{telephone}}</p>
        <p>E-mail: {{email}}</p>
        <p>Endereço: {{address}}, {{district}} - {{city}}/{{state}} - CEP: {{cep}}</p>
        <p>Meios de Pagamento: {{payment_methods}}</p>
      </CardContent>
      <CardFooter class="grid grid-col gap-5 justify-start">
        <EventsCard :buffetId="props.buffetId"/>
        <Button class="w-24" @click="$emit('go-back')">Voltar</Button>
      </CardFooter>
    </Card>
  </div>
</template>
