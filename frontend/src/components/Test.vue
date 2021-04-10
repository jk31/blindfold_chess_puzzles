<template>
  <div id="test">
    <font-awesome-icon icon="chess-king" size="3x" />
    <font-awesome-icon icon="chess-queen" size="3x" />
    <font-awesome-icon icon="chess-rook" size="3x" />
    <font-awesome-icon icon="chess-bishop" size="3x" />
    <font-awesome-icon icon="chess-knight" size="3x" />
    <font-awesome-icon icon="chess-pawn" size="3x" />
    <font-awesome-icon icon="chess-king" color="white" size="3x" />
    <font-awesome-icon icon="chess-queen" color="white" size="3x" />
    <font-awesome-icon icon="chess-rook" color="white" size="3x" />
    <font-awesome-icon icon="chess-bishop" color="white" size="3x" />
    <font-awesome-icon icon="chess-knight" color="white" size="3x" />
    <font-awesome-icon icon="chess-pawn" color="white" size="3x" />
  </div>
</template>

<script>
import puzzles from '../data/puzzles_alg.json';

export default {
  name: 'Test',
  data() {
    return {
      puzzles,
    };
  },
};
</script>

<style>
#test {
  background-color: rgb(45, 167, 45);
  padding: 10px;
}
</style>
