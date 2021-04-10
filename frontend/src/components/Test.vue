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
    <div id="filter">
      <h1>Filter</h1>
      <!-- <v-range-slider
        label="Puzzle Rating Range"
        min="400"
        max="3000"
      ></v-range-slider> -->

      <v-card flat color="transparent">
        <v-subheader>Puzzle Rating Range</v-subheader>

        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-range-slider
                v-model="ratingRange"
                :max="ratingMax"
                :min="ratingMin"
                step="50"
                hide-details
                class="align-center"
              >
                <template v-slot:prepend>
                  <v-text-field
                    :value="ratingRange[0]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(ratingRange, 0, $event)"
                  ></v-text-field>
                </template>
                <template v-slot:append>
                  <v-text-field
                    :value="ratingRange[1]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(ratingRange, 1, $event)"
                  ></v-text-field>
                </template>
              </v-range-slider>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card flat color="transparent">
        <v-subheader>Number of Pieces Range</v-subheader>

        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-range-slider
                v-model="numberOfPiecesRange"
                :max="numberOfPiecesMax"
                :min="numberOfPiecesMin"
                hide-details
                class="align-center"
              >
                <template v-slot:prepend>
                  <v-text-field
                    :value="numberOfPiecesRange[0]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(numberOfPiecesRange, 0, $event)"
                  ></v-text-field>
                </template>
                <template v-slot:append>
                  <v-text-field
                    :value="numberOfPiecesRange[1]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(numberOfPiecesRange, 1, $event)"
                  ></v-text-field>
                </template>
              </v-range-slider>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      {{ numberOfPuzzles }}
      {{ numberOfFilterredPuzzles }}
      {{ ratingRange }}
      {{ numberOfPiecesRange }}
    </div>
  </div>
</template>

<script>
import puzzles from '../data/puzzles_alg.json';

export default {
  name: 'Test',
  data() {
    return {
      puzzles,
      ratingMin: 400,
      ratingMax: 3000,
      ratingRange: [800, 1500],
      numberOfPiecesMin: 3,
      numberOfPiecesMax: 32,
      numberOfPiecesRange: [4, 10],
    };
  },
  computed: {
    numberOfPuzzles() {
      return this.puzzles.length;
    },
    numberOfFilterredPuzzles() {
      return this.puzzles.filter(
        (puzzle) =>
          puzzle.rating > this.ratingRange[0] &&
          puzzle.rating < this.ratingRange[1] &&
          puzzle.number_of_pieces > this.numberOfPiecesRange[0] &&
          puzzle.number_of_pieces < this.numberOfPiecesRange[1]
      ).length;
    },
  },
};
</script>

<style>
#pieces {
  background-color: rgb(45, 167, 45);
  padding: 10px;
}
</style>
