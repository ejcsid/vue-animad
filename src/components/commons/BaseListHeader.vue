<template>
  <v-layout row wrap>
    <v-flex xs8>
      <v-text-field id="searchText"
        regular
        :placeholder="$vuetify.t('$vuetify.search.placeholder')"
        prepend-icon="search"
        clearable
        @input= "doFilter"
        :success-messages="$vuetify.t('$vuetify.search.resultsText.'+resultsText, [ rowCount ])"
        v-model="searchText"
      >
    </v-text-field>
    </v-flex>
    <v-flex xs4>
      <v-btn @click="doNew">
        {{ $vuetify.t('$vuetify.button.new') }}
        <v-icon>add_circle</v-icon>
      </v-btn>
      <v-btn @click="doDelete">
        {{ $vuetify.t('$vuetify.button.delete') }}
        <v-icon>delete</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        searchText: "",
      }
    },
    props: [
      'routerNew',
      'resultsText',
      'rowCount'
    ],
    methods: {
      doFilter: function() {
        this.$emit('doFilter', this.searchText)
      },
      doNew: function() {
        this.$router.push({name: this.routerNew})
      },
      doDelete: function() {
        console.log("doDelete")
      }
    }
  }
</script>

<style>
</style>
