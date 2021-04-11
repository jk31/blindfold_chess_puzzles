<template>
  <div id="filter">
    <v-expansion-panels v-model="openedPanel" multiple>
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
            <v-subheader>Number of Pieces</v-subheader>
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn block color="success" class="my-3" @click="playPuzzle"
      >Play a Puzzle</v-btn
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Test',
  data() {
    return {
      openedPanel: [0],
    };
  },
  computed: {
    ...mapState('puzzles', [
      'ratingMin',
      'ratingMax',
      'numberOfPiecesMin',
      'numberOfPiecesMax',
    ]),
    ratingRange: {
      get() {
        return this.$store.state.puzzles.ratingRange;
      },
      set(range) {
        this.$store.commit('puzzles/updateRatingRange', range);
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
      this.openedPanel = [];
      this.$store.dispatch('puzzles/getRandomPuzzleFromFilteredPuzzles');
    },
  },
};
</script>

<style></style>
