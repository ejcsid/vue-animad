<template>
  <v-flex>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn slot="activator" icon>
        <v-icon color="black">delete</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="headline">{{ deleteHeader }}</v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="doDelete()">Yes</v-btn>
          <v-btn @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn icon ripple @click="doDetail()">
      <v-icon color="black">edit</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    props: [
      'item',
      'routerDetail',
      'deleteHeader',
      'deleteText'
    ],
    methods: {
      doDelete: function() {
        this.$emit('doDelete', this.item)
        this.dialog = false
      },
      doDetail: function() {
        this.$router.push({name: this.routerDetail, params: { id: this. item.id, item: this.item }})
      }
    }
  }

</script>

<style>
</style>
