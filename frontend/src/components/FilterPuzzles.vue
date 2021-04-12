<template>
  <div id="filter">
    <v-expansion-panels v-model="openedFilterPanel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header> Puzzle Setings </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card flat color="transparent">
            <v-subheader>Puzzle Rating</v-subheader>
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider
                    v-model="ratingRange"
                    :max="3000"
                    :min="400"
                    step="100"
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
            <v-subheader>Number of Pieces</v-subheader>
            <v-card-text>
              <v-row>
                <v-col class="px-4">
                  <v-range-slider
                    v-model="numberOfPiecesRange"
                    :max="32"
                    :min="3"
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn block color="success" class="my-3" elevation="2" @click="playPuzzle"
      >Play a Puzzle</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'Test',
  computed: {
    ratingRange: {
      get() {
        return this.$store.state.puzzles.ratingRange;
      },
      set(range) {
        this.$store.commit('puzzles/updateRatingRange', range);
      },
    },
    openedFilterPanel: {
      get() {
        return this.$store.state.puzzles.openedFilterPanel;
      },
      set() {
        this.$store.commit('puzzles/updateOpenedFilterPanel');
      },
    },
    numberOfPiecesRange: {
      get() {
        return this.$store.state.puzzles.numberOfPiecesRange;
      },
      set(range) {
        this.$store.commit('puzzles/updateNumberOfPiecesRange', range);
      },
    },
  },
  methods: {
    playPuzzle() {
      this.$store.commit('puzzles/closeOpenedFilterPanel');
      this.$store.commit('puzzles/updatePuzzleSolved', false);
      this.$store.dispatch('puzzles/getRandomPuzzleFromFilteredPuzzles');
    },
  },
};
</script>

<style></style>
