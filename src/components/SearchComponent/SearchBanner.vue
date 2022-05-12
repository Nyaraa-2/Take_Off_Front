<template>
  <div class="flex flex-row my-6 mx-7 gap-5 items-center">
    <input
      class="border-1 border-bg-gray-400 p-3 bg-red transition h-10 rounded-md focus:outline-none w-1/3 text-black text-lg"
      type="search"
      name="search"
      placeholder="Ex : Développeur Fullstack"
    />
    <input
      class="border-1 border-bg-gray-400 p-3 bg-red transition h-10 rounded-md focus:outline-none w-1/3 text-black text-lg"
      type="search"
      name="search"
      placeholder="Ex : Lille"
    />
    <LayoutButton class="w-1/3">Rechercher</LayoutButton>
  </div>
</template>

<script>
import LayoutButton from '../CommonComponent/LayoutButton.vue'
export default {
  name: 'SearchBanner',
  components: { LayoutButton },
}
</script>

<style></style>
