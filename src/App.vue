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
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          @click=""
        >
          <v-list-tile-action>
            <v-icon> {{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            {{ item.title }}
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
      <router-view/>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      menuItems: [
        {title: "Animals", icon: "pets", link: "/animals"},
        {title: "Keepers", icon: "face", link: "/keepers"},
        {title: "Enclosures", icon: "account_balance", link: "/enclosures"}

      ]

    }
  }
}
</script>
