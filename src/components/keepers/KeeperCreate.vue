<template>
  <v-container>
    <v-layout>
      <v-flex xs12 p>
        <v-card >
          <v-card-title>
            <BaseHeader icon='face' title='Create Keeper'/>
            </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              lazy-validation
            >
              <KeeperFormContent v-bind:nameRules='nameRules' v-bind:rules='rules' v-bind:skills='skills' v-bind:keeper='keeper'/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <BaseFormActions v-on:doSave="doSave" v-on:doCancel="doCancel"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import BaseHeader from '../commons/BaseHeader'
  import BaseFormActions from '../commons/BaseFormActions'
  import KeeperFormContent from './KeeperFormContent'

  export default {
    components: {
      KeeperFormContent,
      BaseHeader,
      BaseFormActions,
    },
    data () {
      return {
        keeper: { firstname: "", lastname: "", skills: ""},
        saveSuccess: false,
        validateError: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length > 2) || 'Name must be more than 2 characters'
        ],
        rules: {
          required: value => !!value || 'Required field.',
        },
        skills: [ "cleaning", "feeding", "breeding", "cooking"]
      }
    },
    methods: {
      doSave: function() {
        if (this.$refs.form.validate()) {
          this.validateError = false
          this.$router.push('/keepers')
        }
        else {
          this.saveSuccess = false
          this.validateError = true
        }
      },
      doCancel: function() {
        this.$router.push('/keepers')
      }
    }
  }
</script>

<style>

</style>
