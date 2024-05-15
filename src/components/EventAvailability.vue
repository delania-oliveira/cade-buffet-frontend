<script setup>
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
Popover,
PopoverContent,
PopoverTrigger,
} from '@/components/ui/popover';
import { PartyPopper, TriangleAlert } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps({
  buffetId: {
    type: String,
    required: true
  },
  eventTypeId: {
    type: String,
    required: true
  }
})

let guest = ref('')
let eventDate = ref('')
let availability = ref(null)

const verify = async() => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/buffets/${props.buffetId}/event_types/${props.eventTypeId}/orders/check_availability?date=${eventDate.value}&guests=${guest.value}`, {
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error('Erro ao verificar disponibilidade')
    }
    availability.value = await response.json()
  
  } catch (err) {
    return { error: err.message }
  }
}

</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button>
        Ver Disponibilidade
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none text-center">
            Verificar Disponibilidade do evento
          </h4>
          <div>
            <Alert v-if="availability && availability.initial_price" class="border-emerald-200 bg-emerald-50">
              <PartyPopper class="w-4 h-4"/>
              <AlertTitle>Buffet Disponível</AlertTitle>
              <AlertDescription>
                Valor inicial: {{availability.initial_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}
              </AlertDescription>
            </Alert>
            <Alert  v-if="availability && availability.unavailable_message" class="border-red-200 bg-red-50">
              <TriangleAlert class="w-4 h-4"/>
              <AlertTitle>Tente outra data!</AlertTitle>
              <AlertDescription>
                {{availability.unavailable_message}}
              </AlertDescription>
            </Alert>
            <Alert  v-if="availability && availability.guest_message" class="border-yellow-200 bg-yellow-50">
              <TriangleAlert class="w-4 h-4"/>
              <AlertTitle>Verifique o número de convidados</AlertTitle>
              <AlertDescription>
                {{availability.guest_message}}
              </AlertDescription>
            </Alert>
          </div>
          <p class="text-sm text-muted-foreground">
            Adicione o número de convidados e a data desejada
          </p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Convidados</Label>
            <Input
              id="width"
              type="number"
              v-model="guest"
              class="col-span-2 h-8"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxWidth">Data:</Label>
            <Input
              id="maxWidth"
              type="date"
              v-model="eventDate"
              class="col-span-2 h-8"
            />
          </div>
        </div>
        <Button @click="verify">
          Verificar
        </Button>
      </div>
    </PopoverContent>
  </Popover>
</template>