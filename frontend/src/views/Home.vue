<template>
  <div class="home">
    <FilterPuzzles />
    <Puzzle v-if="activePuzzleExists" />
    <PlayerGuesses v-if="activePuzzleExists" />
    <Solution v-if="solutionVisible" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import FilterPuzzles from '@/components/FilterPuzzles.vue';
import Puzzle from '@/components/Puzzle.vue';
import PlayerGuesses from '@/components/PlayerGuesses.vue';
import Solution from '@/components/Solution.vue';

export default {
  name: 'Home',
  components: {
    FilterPuzzles,
    Puzzle,
    PlayerGuesses,
    Solution,
  },
  created() {
    this.$store.dispatch('puzzles/loadPuzzles');
  },
  computed: {
    ...mapGetters('puzzles', [
      'noPuzzles',
      'activePuzzleExists',
      'solutionVisible',
    ]),
  },
};
</script>
