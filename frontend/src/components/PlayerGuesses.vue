<template>
  <div id="solution">
    <v-card elevation="2" class="mb-3">
      <v-card-title class=""
        >{{ activePlayer }}'s next move {{ solution }}</v-card-title
      >
      <v-card-text>
        <v-text-field
          v-model="playerSolution"
          label="Algebraic notation"
          placeholder="Qxh7#"
          filled
          autocomplete="off"
          clearable
          style="width: 200px"
          @keyup.enter="checkSolution"
        ></v-text-field
        ><v-btn
          color="primary"
          class="mb-3 mr-3"
          @click="checkSolution"
          :disabled="playerSolution === '' || solutionVisible"
          >Check Move</v-btn
        ><v-btn
          color="primary"
          class="mb-3 mr-3"
          @click="showSolution"
          :disabled="solutionVisible"
          >Show solution</v-btn
        >
      </v-card-text>

      <div v-if="playerWrongAnswers.length > 0">
        <v-card-subtitle style="padding-top: 0px">Wrong moves</v-card-subtitle>
        <v-card-text>
          <v-chip
            v-for="(answer, indexW) in playerWrongAnswers"
            :key="indexW"
            class="mr-2"
            color="red"
            text-color="white"
            >{{ answer }}</v-chip
          >
        </v-card-text>
      </div>

      <div v-if="playerCorrect > 0">
        <v-card-subtitle style="padding-top: 0px"
          >Correct moves and {{ inactivePlayer }}'s responses</v-card-subtitle
        >
        <v-card-text>
          <v-chip
            v-for="(answer, indexC) in solution.slice(0, playerCorrect)"
            :key="indexC"
            class="mr-2"
            :color="indexC % 2 == 0 ? 'success' : 'blue-grey'"
            text-color="white"
            >{{ answer }}</v-chip
          >
        </v-card-text>
      </div>
    </v-card>

    <v-btn
      v-if="solutionVisible"
      block
      color="success"
      class="my-3"
      elevation="2"
      @click="playPuzzle"
      >Play another Puzzle</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PlayerGuesses',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('puzzles', [
      'activePuzzle',
      'activePlayer',
      'inactivePlayer',
      'solutionVisible',
      'solution',
      'solutionPlayerPart',
      'solutionOpponentPart',
      'playerCorrect',
      'playerWrongAnswers',
    ]),
    playerSolution: {
      get() {
        return this.$store.state.puzzles.playerSolution;
      },
      set(value) {
        this.$store.commit('puzzles/updatePlayerSolution', value);
      },
    },
  },
  methods: {
    checkSolution() {
      if (this.playerSolution === '') {
        return;
      }

      let isCorrect = this.playerSolution === this.solution[this.playerCorrect];

      if (isCorrect) {
        if (this.solution.length == this.playerCorrect + 1) {
          // finished puzzle
          this.$store.commit('puzzles/increasePlayerCorrect', 1);
        } else {
          // not finished puzzle -> add opponent move
          this.$store.commit('puzzles/increasePlayerCorrect', 2);
        }
      } else {
        this.$store.commit(
          'puzzles/pushPlayerWrongAnswers',
          this.playerSolution
        );
      }

      // clean input field
      this.$store.commit('puzzles/updatePlayerSolution', '');
    },
    showSolution() {
      this.$store.commit('puzzles/updateSolutionVisible', true);
    },
    playPuzzle() {
      this.$store.commit('puzzles/closeOpenedFilterPanel');
      this.$store.dispatch('puzzles/getRandomPuzzleFromFilteredPuzzles');
    },
  },
};
</script>

<style scoped></style>
