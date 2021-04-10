<template>
  <div class="home">
    <FilterPuzzles />
    <Puzzle />
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
};
</script>
