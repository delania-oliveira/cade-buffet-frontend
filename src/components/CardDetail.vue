<script setup>
  import {
    Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
  } from '@/components/ui/card'
  import  EventCard  from './EventCard.vue'
</script>

<template>
  <div class="grid max-w-7xl mx-auto justify-center content-center">
    <Card>
      <CardHeader>
        <CardTitle>Buffet Brilho Celestial Eventos</CardTitle>
        <CardDescription class="text-justify">O Buffet Eventos Brilho Celestial proporciona experiências únicas e memoráveis para tornar seu evento especial. Com uma equipe dedicada e espaços encantadores, estamos prontos para realizar seus sonhos.</CardDescription>
      </CardHeader>
      <CardContent class="">
        <h2>Informações</h2>
        <p>Telefone: {{telephone}}</p>
        <p>E-mail: {{email}}</p>
        <p>Endereço: {{address}}, {{district}} - {{city}}-{{state}} CEP:{cep}</p>
      </CardContent>
      <CardFooter>
        <EventCard/>
      </CardFooter>
    </Card>
  </div>
</template>
