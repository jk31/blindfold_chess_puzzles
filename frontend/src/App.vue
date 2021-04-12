<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" text> Blindfold Chess Puzzles v.0.1</v-btn>

      <v-spacer></v-spacer>

      <v-btn to="/about" text>
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
