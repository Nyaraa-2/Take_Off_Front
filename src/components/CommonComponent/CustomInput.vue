<template>
  <div>
    <label hidden :for="name">{{ label }}</label>
    <input
      class="border-1 border-bg-gray-400 p-3 bg-red transition h-10 rounded-md focus:outline-none w-1/3 text-black text-lg"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    name: String,
    type: String,
    placeholder: String,
    label: String,
  },
}
</script>
