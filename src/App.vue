<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <v-icon>reorder</v-icon>
              Animad-App
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon> {{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title> {{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <!--v-toolbar-title class="headline text-uppercase">
      </v-toolbar-title-->
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Logout</span>
        <v-icon>input</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Animals/>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Animals from './components/Animals'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Animals
  },
  data () {
    return {
      items: [
        {title: "Animals", icon: "pets"},
        {title: "Keepers", icon: "face"},
        {title: "Enclosures", icon: "account_balance"}

      ]

    }
  }
}
</script>
