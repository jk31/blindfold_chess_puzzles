<template>
  <v-card elevation="2">
    <v-card-title class="mb-3"
      >Solution including opponent's moves:
    </v-card-title>
    <v-card-subtitle>{{ solution.join(' ') }}</v-card-subtitle>
    <v-card-text>
      {{ solutionPlayerPart }} <br />
      {{ solutionOpponentPart }}
      <br />
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
  },
};
</script>

<style></style>
