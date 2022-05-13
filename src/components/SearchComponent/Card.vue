<template>
  <div
    class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
  >
    <img
      class="h-56 lg:h-40 w-full object-cover"
      :src="freelance.picture_profil"
      alt=""
    />
    <div class="p-3 display_1">
      <div>
        <p class="display rounded-xl px-10 py-2 text-white bg-primary">
          {{ freelance.price }}€
        </p>
      </div>
      <span class="text-sm text-primary">{{
        freelance.firstname + ' ' + freelance.lastname
      }}</span>
      <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
        {{ freelance.job_name }} 🚀
      </h3>
      <p class="paragraph-normal text-gray-600">{{ freelance.about }}</p>
      <div class="flex mt-2 mb-2">
        <p v-for="lang in freelance.languages" :key="lang">
          <span
            class="inline-block rounded-full text-white bg-secondary px-2 py-1 text-xs font-bold mr-3"
            >{{ lang }}</span
          >
        </p>
      </div>
      <div class="flex mt-2 mb-2">
        <p v-for="f in freelance.frameworks" :key="f">
          <span
            class="inline-block rounded-full text-white bg-primary px-2 py-1 text-xs font-bold mr-3"
            >{{ f }}</span
          >
        </p>
      </div>

      <a class="mt-3 block text-primary font-semibold" href="#">
        <router-link to="/profile">Voir le profil >></router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Card',
  props: {
    freelance: Object,
  },
}
</script>

<style>
.display {
  position: absolute;
  left: 150px;
  top: -25px;
  text-align: center;
}
.display_1 {
  position: relative;
}
</style>
