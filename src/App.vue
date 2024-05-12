<script setup>
  import Header from './components/Header.vue'
  import SearchInput from './components/SearchInput.vue'
  import CardList from './components/CardList.vue'
  import CardDetail from './components/CardDetail.vue'

  const onSearch = (searchTerm) => {
  }
</script>

<template>
  <div id="app" class="flex flex-col gap-y-8 w-full">
      <Header />
      <div class="mx-4 flex flex-col gap-y-8">
        <SearchInput @input="onSearch" />
        <CardList />
        <CardDetail />
      </div>
  </div>
</template>
