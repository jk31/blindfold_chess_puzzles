<template>
  <div id="solution">
    <v-card elevation="2">
      <v-card-title class="mb-3"
        >{{ activePlayer }}'s next move: {{ playerSolution }}
      </v-card-title>
      <!-- <v-card-subtitle></v-card-subtitle> -->
      <v-card-text>
        <v-text-field
          v-model="playerSolution"
          label="Algebraic notation"
          placeholder="Qxh7#"
          filled
          style="width: 200px"
        ></v-text-field>
        <v-btn color="primary" class="mb-3 mr-3">Check your move</v-btn>
        <v-btn color="primary" class="mb-3 mr-3">Show solution</v-btn>
      </v-card-text>
      {{ solution }}
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Solution',
  data() {
    return {
      playerSolution: '',
    };
  },
  computed: {
    activePlayer() {
      return this.activePuzzle.active === 'w' ? 'White' : 'Black';
    },
    activePuzzle() {
      return this.$store.state.puzzles.activePuzzle;
    },
    solution() {
      return this.activePuzzle.moves_alg.slice(1);
    },
  },
  methods: {},
};
</script>

<style scoped></style>
