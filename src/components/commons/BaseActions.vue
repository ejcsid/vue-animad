<template>
  <v-container>
    <v-spacer></v-spacer>
    <v-btn @click="doCancel()">Cancel</v-btn>
    <v-btn @click="doSave()">Save</v-btn>
  </v-container>
</template>

<script>
  export default {
    methods: {
      doSave: function() {
        this.$emit('doSave')
      },
      doCancel: function() {
        this.$emit('doCancel')
      },
    }
  }
</script>

<style>
</style>
