<template>
  <v-container>
    <v-layout>
      <v-flex xs12 p>
        <v-card >
          <v-card-title>
            <BaseHeader icon='pets' title='Create Animal'/>
            </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              lazy-validation
            >
              <AnimalFormContent v-bind:nameRules='nameRules' v-bind:rules='rules' v-bind:types='types' v-bind:gender='gender' v-bind:animal='animal'/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <BaseActions v-on:doSave="doSave" v-on:doCancel="doCancel"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import BaseHeader from '../commons/BaseHeader'
  import BaseActions from '../commons/BaseActions'
  import AnimalFormContent from './AnimalFormContent'

  export default {
    components: {
      AnimalFormContent,
      BaseHeader,
      BaseActions,
    },
    data () {
      return {
        animal: { name: "", type: "", birthday: new Date().toISOString().substr(0, 10), gender: "", weight: 0, alive: true},
        saveSuccess: false,
        validateError: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length > 2) || 'Name must be more than 2 characters'
        ],
        rules: {
          required: value => !!value || 'Required field.',
        },
        types: [ "Elefant", "Giraffe", "Dog", "Cat"],
        gender: [ "female", "male", "diverse" ],
      }
    },
    methods: {
      doSave: function() {
        if (this.$refs.form.validate()) {
          this.validateError = false
          this.$router.push('/animals')
        }
        else {
          this.saveSuccess = false
          this.validateError = true
        }
      },
      doCancel: function() {
        console.log("doCancel")
        this.$router.push('/animals')
      }
    }
  }
</script>

<style>

</style>
