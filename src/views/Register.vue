<template>
  <div class="flex flex-auto">
    <div class="flex h-screen w-screen items-center justify-center">
      <button
        type="button"
        class="flex items-center rounded-xl border-solid border-2 border-secondary px-4 py-2 text-white"
      >
        <span class="text-secondary font-medium">
          <slot></slot> Connexion
        </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
