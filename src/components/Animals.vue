<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <v-flex mb-4>
        <v-icon large>pets</v-icon>
      </v-flex>
      <v-flex mb-4>
        <h1 class="headline font-weight-bold mb-3">
          Übersicht Animals
        </h1>
      </v-flex>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs8>
            <v-text-field
              regular
              placeholder="Search"
              prepend-icon="search"
              clearable
              @input= "doSearch"
              :success-messages=resultsText
              v-model="inputValue"
            >
          </v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="doNew()">
              New
              <v-icon>add_circle</v-icon>
            </v-btn>
            <v-btn @click="doDelete()">
              Delete
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
           <v-card dark color="purple">
             <v-card-text>xs10 offset-xs1</v-card-text>
           </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: "abc",
        searchCount: 0,
        resultsText: "",
        searchText: "",
        inputValue: null
      }
    },
    methods: {
      doSearch: function() {
        // TODO filter list/table rows and show correct results text
        this.inputValue === null ? this.searchCount = 0 :
          this.searchCount < 3 ? this.searchCount++ : this.searchCount = 0
        this.inputValue === null ? this.resultsText = "" :
          this.searchCount === 0 ? this.resultsText = "No Data found" : this.resultsText = this.searchCount+" rows found"

        console.log("resultsText: "+this.resultsText)
      },
      doNew: function() {
        console.log("doNew")
      },
      doDelete: function() {
        console.log("doDelete")
      }
    }
  }
</script>

<style>

</style>
