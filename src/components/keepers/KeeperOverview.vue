<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <BaseHeader icon='face' title='Overview Keepers'/>

      <v-container grid-list-md text-xs-center>
        <BaseListHeader routerNew='keepers-create' v-bind:resultsText='resultsText' v-bind:rowCount='rowCount' v-on:doFilter='doSearch($event)'/>

        <v-flex xs12>
         <v-list two-line>
           <v-list-tile
             v-for="item in filteredItems"
           >
           <v-list-tile-avatar>
             <v-icon>pets</v-icon>
           </v-list-tile-avatar>
           <v-list-tile-content>
             <v-list-tile-title>{{ item.firstname }}, {{ item.lastname }}</v-list-tile-title>
             <v-list-tile-sub-title>{{ item.firstname }}, {{ item.lastname }}, {{ item.skills | translateArray('$vuetify.keeper.skills') }}, {{ item.gender | translateArray('$vuetify.gender') }}</v-list-tile-sub-title>
           </v-list-tile-content>
           <v-list-tile-action>
              <BaseListActions
                v-if="item.gender === 'female'"
                v-bind:item='item'
                routerDetail='keepers-detail'
                :deleteHeader = "$vuetify.t('$vuetify.deleteDialog.deleteHeader', [ $vuetify.t('$vuetify.keeper.entityNameFemale') ])"
                v-on:doDelete='doDelete(item)'>
                  {{ $vuetify.t('$vuetify.deleteDialog.deleteQuestion', [ $vuetify.t('$vuetify.keeper.entityNameFemale'), item.lastname ]) }}
              </BaseListActions>
              <BaseListActions
                v-else
                v-bind:item='item'
                routerDetail='keepers-detail'
                :deleteHeader = "$vuetify.t('$vuetify.deleteDialog.deleteHeader', [ $vuetify.t('$vuetify.keeper.entityName') ])"
                v-on:doDelete='doDelete(item)'>
                  {{ $vuetify.t('$vuetify.deleteDialog.deleteQuestion', [ $vuetify.t('$vuetify.keeper.entityName'), item.lastname ]) }}
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
        deleteHeader: 'parent.$t($vuetify.deleteDialog.deleteHeader)',
        items: [
          { id: 1, firstname: "Sarah", lastname: "Wiender", skills: ["cooking", "breeding"], gender: "female" },
          { id: 2, firstname: "Tim", lastname: "Meltzer", skills: ["cleaning", "feeding"], gender: "male" },
          { id: 3, firstname: "Alfons", lastname: "Beckschuh", skills: ["cooking"], gender: "male"}
        ],
        dialog: false,
        entityName: "$vuetify.t('$vuetify.deleteDialog.deleteHeader')"
      }
    },
    computed: {
      filteredItems: function() {
        return this.items.filter(item =>  item.firstname.toLowerCase().includes(this.searchText))
      },
      resultsText: function() {
        if (!this.filteredItems || this.filteredItems.length === 0) {
          return "noDataFound"
        }
        else {
          return "dataFound"
        }
      },
      rowCount: function() {
        if (!this.filteredItems || this.filteredItems.length === 0) {
          return 0
        }
        else {
          return this.filteredItems.length
        }
      },
    },
    methods: {
      doSearch: function(searchText) {
        this.searchText = searchText === null ? "" : searchText
      },
      doNew: function() {
        this.$router.push({name: 'keeper-create'})
      },
      doDelete: function(keeper) {
        var idx = this.items.indexOf(keeper, 0)
        this.items.splice(idx, 1)
        this.dialog = false
      },
      doDetail: function(keeper) {
        this.$router.push({name: 'keepers-detail', params: {id: 1, item: keeper }})
      }
    }
  }
</script>

<style>

</style>
