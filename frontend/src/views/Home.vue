<template>
  <div class="home">
    <FilterPuzzles />
    <Puzzle v-if="$store.state.puzzles.activePuzzle != {}" />
  </div>
</template>

<script>
import FilterPuzzles from '@/components/FilterPuzzles.vue';
import Puzzle from '@/components/Puzzle.vue';

export default {
  name: 'Home',
  components: {
    FilterPuzzles,
    Puzzle,
  },
  created() {
    this.$store.dispatch('puzzles/loadPuzzles');
  },
};
</script>
