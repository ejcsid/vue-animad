<template>
  <v-container>
    <v-flex>
      <v-icon large>{{ icon }}</v-icon>
      <span class="headline font-weight-bold">{{ title }}</span>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    props: [
      'icon',
      'title'
    ]
  }
</script>

<style>
</style>
