<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <v-flex mb-4>
        <h1 class="headline font-weight-bold mb-3">
          Übersicht Animals
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
             <v-icon>pets</v-icon>
           </v-list-tile-avatar>
           <v-list-tile-content>
             <v-list-tile-title>{{ item.name }}, {{ item.type }}, {{ item.gender }}</v-list-tile-title>
             <v-list-tile-sub-title>{{ item.name }}, {{ item.type }}, {{ item.birthday }}, {{ item.gender }}, {{ item.weight }}, {{ item.alive }}</v-list-tile-sub-title>
           </v-list-tile-content>
           <v-list-tile-action>
             <v-flex>
               <v-btn icon ripple @click="doDelete(item.name)">
                 <v-icon color="black">delete</v-icon>
               </v-btn>
               <v-btn icon ripple @click="doDetail(item)">
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
          { name: "Ben", type: "Elefant", birthday: "2011-01-01", gender: "male", weight: 1234, alive: true},
          { name: "Berta", type: "Giraffe", birthday: "2016-03-02", gender: "female", weight: 721, alive: false}
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
        this.$router.push({name: 'animals-create'})
      },
      doDelete: function(animalsId) {
        console.log("doDelete "+animalsId)
      },
      doDetail: function(animal) {
        this.$router.push({name: 'animals-detail', params: {id: 1, item: animal }})
      }
    }
  }
</script>

<style>

</style>
