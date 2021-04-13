<template>
  <v-card elevation="2" id="solution">
    <v-card-title class="mb-3"
      >Solution including opponent's responses:
    </v-card-title>
    <v-card-subtitle class="font-weight-bold">{{
      solution.join(' ')
    }}</v-card-subtitle>
    <v-card-text>
      <v-btn
        :href="puzzleLink"
        target="_blank"
        text
        outlined
        color="blue-grey darken-2"
      >
        <span class="mr-2">Open puzzle on Lichess.com</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Solution',
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
    puzzleLink() {
      return `https://lichess.org/training/${this.activePuzzle.puzzle_id}`;
    },
  },
};
</script>

<style></style>
