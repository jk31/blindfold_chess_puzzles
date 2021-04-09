<template>
  <div id="test">
    <ul>
      <li v-for="puzzle in puzzles" :key="puzzle.id">{{ puzzle.id }}</li>
    </ul>
  </div>
</template>

<script>
import puzzles from "../data/puzzles_alg.json";

export default {
  name: "Test",
  data() {
    return {
      puzzles,
    };
  },
};
</script>

<style></style>
