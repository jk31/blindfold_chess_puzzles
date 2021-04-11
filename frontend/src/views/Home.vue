<template>
  <div class="home">
    <FilterPuzzles />
    <Puzzle v-if="activePuzzleExists" />
    <Solution v-if="activePuzzleExists" />
  </div>
</template>

<script>
import FilterPuzzles from '@/components/FilterPuzzles.vue';
import Puzzle from '@/components/Puzzle.vue';
import Solution from '@/components/Solution.vue';

export default {
  name: 'Home',
  components: {
    FilterPuzzles,
    Puzzle,
    Solution,
  },
  created() {
    this.$store.dispatch('puzzles/loadPuzzles');
  },
  computed: {
    activePuzzleExists() {
      return this.$store.state.puzzles.activePuzzleExists;
    },
  },
};
</script>
