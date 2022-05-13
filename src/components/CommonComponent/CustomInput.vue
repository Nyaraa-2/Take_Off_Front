<template>
  <div>
    <label hidden :for="name">{{ label }}</label>
    <input
      class="w-full border-1 border-bg-gray-400 p-3 bg-red transition h-10 rounded-md focus:outline-none text-black text-lg"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitInput(value) {
      this.$emit('input', value)
    },
  },
}
</script>
