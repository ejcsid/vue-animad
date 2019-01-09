<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <router-view/>
      <v-flex mb-4>
        <v-alert
          :value="saveSuccess"
          type="success"
        >
          Keeper successfully saved.
        </v-alert>
        <v-alert
          :value="validateError"
          type="error"
        >
          Validation failed! Please correct settings.
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        saveSuccess: false,
        validateError: false
      }
    },
  }
</script>

<style>

</style>
