<template>
  <img :src="require(`../../public/pieces/${piece}.png`)" />
</template>

<script>
export default {
  name: 'Piece',
  props: ['piece'],
};
</script>

<style></style>
