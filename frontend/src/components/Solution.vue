<template>
  <div id="solution">
    <v-card elevation="2" class="mb-3">
      <v-card-title class="mb-3">{{ activePlayer }}'s next move</v-card-title>
      <!-- <v-card-subtitle></v-card-subtitle> -->
      <v-card-text>
        <v-text-field
          v-model="playerSolution"
          label="Algebraic notation"
          placeholder="Qxh7#"
          filled
          style="width: 200px"
          autocomplete="off"
        ></v-text-field>
        <v-btn
          color="primary"
          class="mb-3 mr-3"
          style="width: 200px"
          @click="checkSolution"
          >Check Move</v-btn
        >
        <v-btn
          color="primary"
          class="mb-3 mr-3"
          style="width: 200px"
          @click="showSolution"
          >Show solution</v-btn
        >
      </v-card-text>
    </v-card>
    <v-card elevation="2" v-if="solutionVisible">
      <v-card-title class="mb-3"
        >Solution including opponent's moves:
      </v-card-title>
      <v-card-subtitle>{{ solution.join(' ') }}</v-card-subtitle>
      <v-card-text>
        <v-btn
          :href="activePuzzle.gameurl"
          target="_blank"
          text
          outlined
          color="blue-grey darken-2"
        >
          <span class="mr-2">Open source game on Lichess.com</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Solution',
  data() {
    return {
      playerSolution: '',
      playerCorrect: 0,
    };
  },
  computed: {
    activePuzzle() {
      return this.$store.state.puzzles.activePuzzle;
    },
    activePlayer() {
      return this.activePuzzle.active === 'w' ? 'White' : 'Black';
    },
    solution() {
      return this.activePuzzle.moves_alg.slice(1);
    },
    solutionVisible() {
      return this.$store.state.puzzles.solutionVisible;
    },
  },
  methods: {
    checkSolution() {
      let isCorrect = this.playerSolution === this.solution[this.playerCorrect];
      console.log(isCorrect);
    },
    showSolution() {
      console.log('toggle');
      this.$store.commit('puzzles/updateSolutionVisible', true);
    },
  },
};
</script>

<style scoped></style>
