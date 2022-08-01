<template>
  <v-card class="mx-auto overflow-hidden">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item router :to="{ name: 'home' }" exact>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>

          <v-list-item router :to="{ name: 'about' }" exact>
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item>

          <v-list-item
            router
            :to="{
              name: 'users',
              params: {
                id: 123123,
                name: 'hj',
              },
              query: {
                group: 'member',
                category: 'trial',
              },
            }"
            exact
          >
            <v-list-item-title>USER</v-list-item-title>
          </v-list-item>

          <v-list-item router :to="{ name: 'users2' }" exact>
            <!-- <v-list-item link @click="$router.push('/user2')"> -->
            <!-- <v-list-tile @click="$router.push({name: 'home'})"> -->
            <!-- <v-list-tile @click="$router.push({name: 'home', query:{}, params:{}})"> -->
            <!-- <v-list-tile @click="$router.push('/about')"> -->
            <!-- <v-list-tile @click="$router.push({path: '/about'})"> -->
            <v-list-item-title>USERS2</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{ name: 'dessert' }" exact>
            <v-list-item-title>DESSERT</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text>
    <router-view></router-view>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
