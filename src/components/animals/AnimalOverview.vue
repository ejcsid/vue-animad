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
            <BaseListActions
              v-bind:item='item'
              routerDetail='animals-detail'
              deleteHeader='Delete Animal?'
              v-on:doDelete='doDelete(item)'>
                Do you really want delete Animal {{item.type}} {{item.name}} ?
            </BaseListActions>
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
  import BaseListActions from '../commons/BaseListActions'

  export default {
    components: {
      BaseHeader,
      BaseListHeader,
      BaseListActions,
    },
    data () {
      return {
        searchCount: 0,
        searchText: "",
        items: [
          { id: 1, name: "Ben", type: "Elefant", birthday: "2011-01-01", gender: "male", weight: 1234, alive: true},
          { id: 2, name: "Berta", type: "Giraffe", birthday: "2016-03-02", gender: "female", weight: 721, alive: false},
          { id: 3, name: "Bello", type: "Dog", birthday: "2017-03-02", gender: "male", weight: 7, alive: true}
        ],
        dialog: false
      }
    },
    computed: {
      filteredItems: function() {
        return this.items.filter(item =>  item.name.toLowerCase().includes(this.searchText))
      },
      resultsText: function() {
        if (this.filterdItems === undefined || this.filteredItems.length === 0) {
          return "No Data found."
        }
        else {
          return this.filteredItems.length+" rows found."
        }
      },
    },
    methods: {
      doSearch: function(searchText) {
        this.searchText = searchText === null ? "" : searchText
      },
      doNew: function() {
        this.$router.push({name: 'animals-create'})
      },
      doDelete: function(animal) {
        var idx = this.items.indexOf(animal, 0)
        this.items.splice(idx, 1)
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
