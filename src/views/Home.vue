<template>
  <div>
    <div class="home">
      <!-- <CustomInput
        placeholder="Mon placeholder test"
        name="test"
        type="text"
        label="Mon input test"
        :value="inputVille"
      /> -->
      <br />
      <input v-model="inputVille" class="border border-solid-secondary" />
      <br />
      <br />
      <button @click="getSearch()" class="bg-secondary text-white">
        rechercher
      </button>
      <div v-for="r in results" :key="r.objectID">
        <p>{{ r.firstname }}</p>
      </div>
      <!-- <LayoutButton secondary >Rechercher</LayoutButton> -->
    </div>
    <div>
      <!-- <p>{{ results.firstname }}</p> -->
    </div>
  </div>
</template>

<script>
// import CustomInput from '../components/CommonComponent/CustomInput.vue'
import algoliasearch from 'algoliasearch'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      inputVille: null,
      test: null,
      results: [],
    }
  },
  methods: {
    async getSearch() {
      const client = algoliasearch(
        'STH0HNRO4C',
        'bda89733a7507b9097cd494fa4a5fa01'
      )

      const index = client.initIndex('search')

      // only query string
      const { hits } = await index.search(this.inputVille, this.test)
      console.log({ ...hits })
      this.results = { ...hits }
    },
  },
}
</script>
