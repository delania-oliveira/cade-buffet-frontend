<script setup>
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'
  import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="grid grid-cols-3 gap-4 max-w-7xl mx-auto justify-center content-center">
    <Card>
      <CardHeader>
        <CardTitle>Buffet Brilho Celestial Eventos</CardTitle>
        <CardDescription class="text-justify">O Buffet Eventos Brilho Celestial proporciona experiências únicas e memoráveis para tornar seu evento especial. Com uma equipe dedicada e espaços encantadores, estamos prontos para realizar seus sonhos.</CardDescription>
      </CardHeader>
      <CardContent class="flex flex-row gap-1">
        <MapPin class="size-6 text-muted-foreground" />
        Cidade Luz - Rio de Janeiro
      </CardContent>
      <CardFooter>
        <Button>Ver detalhes</Button>
      </CardFooter>
    </Card>
  </div>
</template>
