<template>
  <div id="test">
    <div id="pieces">
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
  </div>
</template>

<script>
export default {
  name: 'Test',
};
</script>

<style>
#pieces {
  background-color: rgb(45, 167, 45);
  padding: 10px;
}
</style>
