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
      <KeeperDialog v-bind:nameRules='nameRules' v-bind:validated='validated' v-bind:skills='keeperSkills' v-on:doCreate='doCreateKeeper($event)' v-on:doOpen='doOpenKeeper'/>
    </v-form>
    <v-form>
      <v-flex xs12>
       <v-list>
         <v-list-tile
           v-for="item in keepers"
         >
           <v-list-tile-content>
             <v-list-tile-title>{{ item.firstname }}, {{ item.lastname }}, {{ item.skills }}</v-list-tile-title>
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
  import KeeperDialog from '../keepers/KeepersDialog'
  export default {
    components: {
      KeeperDialog
    },
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
          firstname: "Create",
          lastname: "Keeper"
        },
        validated: false,
        keeperSkills: [ "cleaning", "feeding", "breeding", "cooking"]
      }
    },
    methods: {
      doSaveBirthday: function(date) {
        this.$refs.menu.save(date)
      },
      doCreateKeeper(event) {
        if (this.$refs.dialog.validate()) {
          this.keepers.push(event)
          this.validated = true
        }
        else {
          this.validated = false
        }
      },
      doOpenKeeper() {
        this.validated = false
      }
    },
  }
</script>

<style>

</style>
