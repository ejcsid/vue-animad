<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <BaseHeader icon='pets' title='Overview Animals'/>

      <v-container grid-list-md text-xs-center>
        <BaseListHeader routerNew='animals-create' v-bind:resultsText='resultsText' v-on:doFilter='doSearch($event)'/>

        <v-flex xs12>
         <v-list two-line>
           <v-list-tile
             v-for="item in filteredItems"
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
               <v-dialog v-model="dialog" persistent max-width="290">
                 <v-btn slot="activator" icon>
                   <v-icon color="black">delete</v-icon>
                 </v-btn>
                 <v-card>
                   <v-card-title class="headline">Delete Animal?</v-card-title>
                   <v-card-text>Do you really want to delete animal "{{ item.name }}, {{ item.type }}"</v-card-text>
                   <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn @click="doDelete(item)">Yes</v-btn>
                     <v-btn @click="dialog = false">No</v-btn>
                   </v-card-actions>
                 </v-card>
               </v-dialog>
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
  import BaseHeader from '../commons/BaseHeader'
  import BaseListHeader from '../commons/BaseListHeader'

  export default {
    components: {
      BaseHeader,
      BaseListHeader
    },
    data () {
      return {
        searchCount: 0,
        searchText: "",
        items: [
          { name: "Ben", type: "Elefant", birthday: "2011-01-01", gender: "male", weight: 1234, alive: true},
          { name: "Berta", type: "Giraffe", birthday: "2016-03-02", gender: "female", weight: 721, alive: false}
        ],
        dialog: false
      }
    },
    computed: {
      filteredItems: function() {
        console.log(this.searchText)

        return this.items.filter(item =>  item.name.toLowerCase().includes(this.searchText))
      },
      resultsText: function() {
        if (this.filteredItems.length === 0) {
          return "No Data found."
        }
        else {
          return this.filteredItems.length+" rows found."
        }
      }
    },
    methods: {
      doSearch: function(searchText) {
        this.searchText = searchText === null ? "" : searchText
      },
      doNew: function() {
        this.$router.push({name: 'animals-create'})
      },
      doDelete: function(animal) {
        console.log("doDelete "+animal.name+", "+"animal.type")
        this.dialog = false
      },
      doDetail: function(animal) {
        this.$router.push({name: 'animals-detail', params: {id: 1, item: animal }})
      }
    }
  }
</script>

<style>

</style>
