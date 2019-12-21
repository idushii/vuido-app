<template>
  <Window title="vuido-app" width="400" height="100" margined v-on:close="exit">
    <Box>
      <Text>Welcome to your Vuido application11221!</Text>
    </Box>
  </Window>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$exit();
    }
  }
}
</script>
