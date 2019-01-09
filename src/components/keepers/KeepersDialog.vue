<template>
<v-layout wrap>
    <v-text-field
      label="Search Keeper">
    </v-text-field>
    <v-dialog v-model="dialogOpen" persistent max-width="600px">
      <v-btn slot="activator" @click="doOpen" icon >
        <v-icon>add_circle</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add Keeper</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First name*" v-model="createdKeeper.firstname" required :rules="nameRules"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Last name*"
                  hint="Keeper's lastname mandatory with min. 2 letters"
                  persistent-hint
                  v-model="createdKeeper.lastname"
                  required
                  :rules="nameRules"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-select
                  multiple
                  label="Skills"
                  :items="skills"
                  v-model="createdKeeper.skills"
                />
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="doCancel()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="doCreate()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-layout>
</template>

<script>
  export default {
    props: [
      'nameRules',
      'dialog',
      'validated',
      'skills'
    ],
    data () {
      return {
        createdKeeper: {
          firstname: "",
          lastname: ""
        },
        dialogOpen: false,
      }
    },
    methods: {
      doCreate() {
        this.$emit('doCreate', this.createdKeeper)
        this.createdKeeper = { firstname: "", lastname: ""}
      },
      doCancel() {
        this.dialogOpen = false
        this.createdKeeper = { firstname: "", lastname: ""}
      },
      doOpen() {
        this.$emit('doOpen')
      }
    },
    watch: {
      validated: function(val) {
        if (val) this.dialogOpen = false
      }
    }
  }
</script>

<style>
</style>
