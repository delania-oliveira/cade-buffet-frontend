<script setup>
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from '@/components/ui/tooltip'
  import { defineProps } from 'vue'

  const props = defineProps({
    iconName: String,
    iconTip: String
  })
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="bg-accent p-4 rounded-md hover:bg-accent/50">
        <component :is="props.iconName" class="size-8 text-muted-foreground hover:text-foreground"/>
      </TooltipTrigger>
      <TooltipContent>
        <p>{{props.iconTip}}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>