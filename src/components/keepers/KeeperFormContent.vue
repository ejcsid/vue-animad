<template>
  <v-container>
    <v-text-field
      label="Name"
      v-model="keeper.firstname"
      clearable
      required
      :rules="nameRules"
    />
    <v-text-field
      label="Name"
      v-model="keeper.lastname"
      clearable
      required
      :rules="nameRules"
    />
    <v-select
      multiple
      label="Skills"
      :items="skills"
      v-model="keeper.skills"
    />
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
      'skills',
      'keeper'
    ],
    data () {
      return {
        validated: false
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
