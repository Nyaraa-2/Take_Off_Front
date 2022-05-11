<template>
  <div>
    <SearchBanner />
    <div class="flex flex-row">
      <section class="h-screen w-1/5 p-5">
        <div
          class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
        >
          Section de recherche ici Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius eaque quas, numquam autem nobis corrupti
          temporibus consectetur ducimus optio doloribus esse veritatis at
          repellendus non dolor explicabo pariatur ad culpa. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Eveniet aut obcaecati,
          voluptate exercitationem iure cumque qui at excepturi optio asperiores
          ratione minima laudantium! Sed et explicabo cupiditate laudantium
          nostrum ut!
        </div>
      </section>
      <section class="h-screen w-4/5 p-5">
        <div
          class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
        >
          <div v-for="c in counter" :key="c">
            <Card />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import SearchBanner from '@/components/SearchBanner'
export default {
  data() {
    return {
      counter: 6,
    }
  },
  components: {
    Card,
    SearchBanner,
  },
}
</script>

<style></style>
