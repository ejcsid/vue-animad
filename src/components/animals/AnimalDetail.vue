<template>
  <v-container>
    <v-layout>
      <v-flex xs12 p>
        <v-card >
          <v-card-title>
            <BaseHeader icon='pets' v-bind:title='title'/>
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
            <BaseFormActions  v-on:doSave="doSave" v-on:doCancel="doCancel"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import BaseHeader from '../commons/BaseHeader'
  import BaseFormActions from '../commons/BaseFormActions'
  import AnimalFormContent from './AnimalFormContent'
  import BaseFormValidation from '../commons/BaseFormValidation'

  export default {
    components: {
      AnimalFormContent,
      BaseHeader,
      BaseFormActions,
    },
    extends: BaseFormValidation,
    data () {
      return {
        animal: this.$route.params.item,
        title: "Edit Animal "+this.$route.params.item.name,
        saveSuccess: false,
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
        this.$router.push('/animals')
      },
    }
  }
</script>

<style>

</style>
