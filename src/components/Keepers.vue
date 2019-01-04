<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <v-flex mb-4>
        <v-icon large>face</v-icon>
      </v-flex>
      <v-flex mb-4>
        <h1 class="headline font-weight-bold mb-3">
          Übersicht Keepers
        </h1>
      </v-flex>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs8>
            <v-text-field id="searchText"
              regular
              placeholder="Search"
              prepend-icon="search"
              clearable
              @input= "doSearch"
              :success-messages=resultsText
              v-model="searchText"
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
        <v-flex xs12>
         <v-list two-line>
           <v-list-tile
             v-for="item in items"
           >
           <v-list-tile-avatar>
             <v-icon>face</v-icon>
           </v-list-tile-avatar>
           <v-list-tile-content>
             <v-list-tile-title>{{ item.firstname }}, {{ item.lastname }}</v-list-tile-title>
             <v-list-tile-sub-title>{{ item.firstname }}, {{ item.lastname }}</v-list-tile-sub-title>
           </v-list-tile-content>
           <v-list-tile-action>
             <v-flex>
               <v-btn icon ripple>
                 <v-icon color="black">delete</v-icon>
               </v-btn>
               <v-btn icon ripple>
                 <v-icon color="black">edit</v-icon>
               </v-btn>
             </v-flex>
           </v-list-tile-action>
         </v-list-tile>
         </v-list>
       </v-flex>
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
        searchText: null,
        items: [
          { firstname: "Hans", lastname: "Dampf"},
          { firstname: "Mary", lastname: "Poppins"}
        ]
      }
    },
    methods: {
      doSearch: function() {
        console.log("doSearch")
        // TODO filter list/table rows and show correct results text

        // searchText is null if clear-Button in search-Filed was clicked
        this.searchText === null ? this.searchCount = 0 :
          this.searchCount < 3 ? this.searchCount++ : this.searchCount = 0
        this.searchText === null ? this.resultsText = "" :
          this.searchCount === 0 ? this.resultsText = "No Data found" : this.resultsText = this.searchCount+" rows found"
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
