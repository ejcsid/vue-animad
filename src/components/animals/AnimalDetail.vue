<template>
  <v-container>
    <v-layout
      align-start
      justify-start
      column
    >
      <v-flex mb-4>
        <h1 class="headline font-weight-bold mb-3">
           Animal "{{ animal.name }}"
        </h1>
      </v-flex>
      <v-container align-start>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-flex>
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
            >
            </v-select>
          </v-flex>
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
            ></v-text-field>
            <v-date-picker
              ref="picker"
              v-model="animal.birthday"
              no-title
              scrollable
              locale="DE"
              :max="new Date().toISOString().substr(0, 10)"
              @change="doSaveBirthday">
            </v-date-picker>
          </v-menu>
          <v-select
            label="Gender"
            :items="gender"
            v-model="animal.gender"
          >
          </v-select>
          <v-text-field
            label="Weight"
            v-model="animal.weight"
            mask="####"
            required
            :rules="[rules.required]"
            suffix="kg">
          </v-text-field>
          <v-checkbox
            label="Alive"
            v-model="animal.alive"
            >
          </v-checkbox>
        </v-form>
        <v-flex mb-4>
          <v-btn @click="doSave()">
            Save
            <v-icon>done</v-icon>
          </v-btn>
          <v-btn @click="doCancel()">
            Cancel
            <v-icon>cancel</v-icon>
          </v-btn>
       </v-flex>
       <v-flex mb-4>
         <v-alert
           :value="saveSuccess"
           type="success"
         >
           Animal successfully saved.
         </v-alert>
         <v-alert
           :value="validateError"
           type="error"
         >
           Validation failed! Please correct settings.
         </v-alert>
       </v-flex>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        animal: this.$route.params.item,
        types: [ "Elefant", "Giraffe", "Dog", "Cat"],
        gender: [ "female", "male", "diverse" ],
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length > 2) || 'Name must be more than 2 characters'
        ],
        rules: {
          required: value => !!value || 'Required field.',
        },
        saveSuccess: false,
        validateError: false
      }
    },
    methods: {
      doCancel: function() {
        this.$router.push('/animals')
      },
      doSave: function() {
        if (this.$refs.form.validate()) {
          this.saveSuccess = true
          this.validateError = false
          window.setTimeout(3600)
          this.$router.push('/animals')
        }
        else {
          this.saveSuccess = false
          this.validateError = true
        }
      },
      doSaveBirthday: function(date) {
        this.$refs.menu.save(date)
      }
    }
  }
</script>

<style>

</style>
