<template>
  <v-container>
      <v-text-field
        label="Name"
        v-model="animal.name"
        clearable
        required
        :rules="nameRules"
      />
      <v-select
        label="Type"
        :items="types"
        v-model="animal.type"
      />
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="animal.birthday"
          label="Birthday"
          prepend-icon="event"
        />
        <v-date-picker
          ref="picker"
          v-model="animal.birthday"
          no-title
          scrollable
          locale="DE"
          :max="new Date().toISOString().substr(0, 10)"
          @change="doSaveBirthday"
        />
      </v-menu>
      <v-select
        label="Gender"
        :items="gender"
        v-model="animal.gender"
      />
      <v-text-field
        label="Weight"
        v-model="animal.weight"
        mask="####"
        required
        :rules="[rules.required]"
        suffix="kg"
      />
      <v-checkbox
        label="Alive"
        v-model="animal.alive"
      />

    <v-form ref="dialog" lazy-validation>
      <v-layout wrap>
        <v-text-field
          label="Search Keeper">
        </v-text-field>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-btn slot="activator" icon >
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
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="createKeeper()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-form>
    <v-form>
      <v-flex xs12>
       <v-list>
         <v-list-tile
           v-for="item in keepers"
         >
           <v-list-tile-content>
             <v-list-tile-title>{{ item.firstname }}, {{ item.lastname }}</v-list-tile-title>
           </v-list-tile-content>
           <v-list-tile-action>
             <v-flex>
               <v-btn icon ripple>
                 <v-icon color="black">delete</v-icon>
               </v-btn>
             </v-flex>
           </v-list-tile-action>
         </v-list-tile>
       </v-list>
     </v-flex>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    props: [
      'nameRules',
      'rules',
      'types',
      'gender',
      'animal'
    ],
    data () {
      return {
        keepers: [],
        createdKeeper: {
          firstname: "",
          lastname: ""
        },
        dialog: false
      }
    },
    methods: {
      doSaveBirthday: function(date) {
        this.$refs.menu.save(date)
      },
      createKeeper() {
        if (this.$refs.dialog.validate()) {
          this.keepers.push(this.createdKeeper)
          this.createdKeeper = { firstname: "", lastname: ""}
          this.dialog = false
          this.saveSuccess = true
        }
      }
    }
  }
</script>

<style>

</style>
