<template>
  <div
    class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
  >
    <img
      class="h-56 lg:h-60 w-full object-cover"
      src="https://i.pinimg.com/564x/42/18/33/4218337adcf2c800d01e6c150c908d3e.jpg"
      alt=""
    />
    <div class="p-3 display_1">
      <div>
        <LayoutButton class="display">250€</LayoutButton>
      </div>
      <span class="text-sm text-primary">Andrea Forbes</span>
      <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
        Développeuse FullStack 🚀
      </h3>
      <p class="paragraph-normal text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia amet
        ab in nam recusandae ullam, reiciendis quo facilis laudantium rem sit.
      </p>
      <a class="mt-3 block text-primary font-semibold" href="#"
        >Voir le profil >></a
      >
    </div>
  </div>
</template>

<script>
import LayoutButton from './LayoutButton.vue'
export default {
  components: { LayoutButton },
  name: 'Card',
}
</script>

<style>
.display {
  position: absolute;
  left: 235px;
  top: -25px;
}
.display_1 {
  position: relative;
}
</style>
