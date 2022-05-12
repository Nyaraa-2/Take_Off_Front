<template>
  <div>
    <div class="home">
      <CustomInput
        placeholder="Mon placeholder test"
        name="test"
        type="text"
        label="Mon input test"
      />
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/CommonComponent/CustomInput.vue'

export default {
  name: 'Home',
  components: { CustomInput },
}
</script>
