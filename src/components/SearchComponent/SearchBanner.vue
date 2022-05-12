<template>
  <div class="flex flex-row my-6 mx-7 gap-5 items-center">
    <CustomInput
      name="job"
      type="text"
      placeholder="Ex : DevOps"
      label="Job recherché"
      value="searchJob"
      v-model="searchJobValue"
      class="w-1/3"
      v-on:keyup.enter="submit"
    />
    <CustomInput
      name="city"
      type="text"
      placeholder="Ex : Lille"
      label="Ville recherchée"
      value="searchCity"
      v-model="searchCityValue"
      class="w-1/3"
      v-on:keyup.enter="submit"
    />

    <LayoutButton @submit="click" action="search" primary class="w-1/3"
      >Rechercher</LayoutButton
    >
  </div>
</template>

<script>
import LayoutButton from '../CommonComponent/LayoutButton.vue'
import CustomInput from '@/components/CommonComponent/CustomInput.vue'
export default {
  name: 'SearchBanner',
  components: { LayoutButton, CustomInput },
  data() {
    return {
      searchJobValue: '',
      searchCityValue: '',
    }
  },
  methods: {
    click(action) {
      console.log(action)
    },
  },
}
</script>

<style></style>
