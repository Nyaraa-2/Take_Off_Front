<template>
  <div>
    <button
      type="button"
      :class="[
        'rounded-xl px-15 py-2 text-white',
        {
          'bg-primary': primary,
          'bg-secondary': secondary,
          'bg-tertiary': tertiary,
        },
      ]"
    >
      <span class="font-semibold"> <slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'layoutbutton',
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
  },
}
</script>

<style></style>
