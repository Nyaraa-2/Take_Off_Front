<template>
  <ais-instant-search index-name="search" :search-client="searchClient">
    <div class="mt-5 mb-5">
      <h2 class="font-semibold text-2xl">Filtres</h2>
      <ais-configure :hitsPerPage="9" />
      <p class="text-left font-semibold text-secondary">Profession</p>
      <ais-hierarchical-menu :attributes="['job_name']" />
      <p class="text-left font-semibold text-secondary">Technologies</p>
      <ais-hierarchical-menu :attributes="['languages']" />
      <p class="text-left font-semibold text-secondary">Frameworks</p>
      <ais-hierarchical-menu :attributes="['frameworks']" />
      <p class="text-left font-semibold text-secondary">Langues</p>
      <ais-hierarchical-menu :attributes="['language']" />
      <p class="text-left font-semibold text-secondary">Localisation</p>
      <ais-hierarchical-menu :attributes="['location_name']" />
      <br />
      <ais-clear-refinements>
        <template v-slot:resetLabel>Effacer les filtres</template>
      </ais-clear-refinements>
    </div>
    <div class="mt-5">
      <ais-search-box placeholder="Ex : Développeur Web Vuejs ..." />
      <ais-hits>
        <template v-slot:item="{ item }">
          <Card :freelance="item" />
        </template>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch'
import 'instantsearch.css/themes/satellite-min.css'
export default {
  name: 'SearchPage',
  data() {
    return {
      searchClient: algoliasearch(
        'STH0HNRO4C',
        'bda89733a7507b9097cd494fa4a5fa01'
      ),
      languages_search: 'Technologies',
    }
  },
}
</script>

<style>
body {
  padding: 1em;
}
.ais-Pagination {
  display: flex;
  justify-content: center;
}
.ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: none;
}
.ais-Hits {
  border: none;
}
.ais-Hits-item {
  box-shadow: none;
}
.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
  border: none;
}
</style>
