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
          Create Animal
        </h1>
      </v-flex>
      <v-container grid-list-md text-xs-center>
        <v-flex xs12>
         <v-list two-line>
           <v-list-tile
             v-for="item in items"
           >
           <v-list-tile-avatar>
             <v-icon>pets</v-icon>
           </v-list-tile-avatar>
           <v-list-tile-content>
             <v-list-tile-title>{{ item.name }}, {{ item.type }}, {{ item.gender }}</v-list-tile-title>
             <v-list-tile-sub-title>{{ item.name }}, {{ item.type }}, {{ item.birthday }}, {{ item.gender }}, {{ item.weight }}, {{ item.alive }}</v-list-tile-sub-title>
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
          { name: "Ben", type: "Elefant", birthday: "01.01.2011", gender: "male", weight: 1234, alive: true},
          { name: "Berta", type: "Giraffe", birthday: "01.03.2016", gender: "female", weight: 721, alive: true}
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
