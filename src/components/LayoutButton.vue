<template>
  <div>
    <button type="button" :class="`rounded-xl bg-${bg} px-15 py-2 text-white`">
      <span class="font-semibold"> <slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'layoutbutton',
  props: {
    bg: String,
  },
}
</script>

<style></style>
