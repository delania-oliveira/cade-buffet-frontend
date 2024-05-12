<script setup>
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover'
  import { Button } from '@/components/ui/button'
  import { Label } from '@/components/ui/label'
  import { Input } from '@/components/ui/input'
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
          <p class="text-sm text-muted-foreground">
            Adicione o número de convidados e a data desejada
          </p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Convidados</Label>
            <Input
              id="width"
              type="text"
              default-value="100"
              class="col-span-2 h-8"
            />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxWidth">Data:</Label>
            <Input
              id="maxWidth"
              type="date"
              class="col-span-2 h-8"
            />
          </div>
        </div>
        <Button>
          Verificar
        </Button>
      </div>
    </PopoverContent>
  </Popover>
</template>