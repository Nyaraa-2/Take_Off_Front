<template>
  <div>
    <button
      type="button"
      :class="`flex items-center rounded-xl bg-${bg} px-4 py-2 m-auto text-${color}`"
    >
      <span class="font-semibold"> <slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'layoutbutton',
  props: {
    bg: { type: String, required: true },
    color: { type: String, required: true },
  },
}
</script>

<style></style>
